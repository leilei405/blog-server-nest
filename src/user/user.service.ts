import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { User } from './user.entity'
import { LoginUserDTO } from './dto/loginuser.dto'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) // 注入User实体类模块
        private readonly userRepository: Repository<User>, 
        private readonly jwtService: JwtService
    ) {}

    // 登录
    async findOne(loginUserDTO: LoginUserDTO) {
        const { password, username } = loginUserDTO;
        const data = await this.userRepository.findOneBy({ username, password });
        if (data == null) {
            throw new HttpException('用户名或密码错误', HttpStatus.BAD_REQUEST)
        }
        const payLoad = { 
            username,
            realname: data.realname,
            id: data.id,
        }

        return await this.jwtService.signAsync(payLoad)
        // return payLoad;
    }
}
