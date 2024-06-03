import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDTO } from './dto/loginuser.dto';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // 登录
    @Post('login')
    async login(@Body() loginUserDTO: LoginUserDTO) {
        return this.userService.findOne(loginUserDTO);
    }
}
