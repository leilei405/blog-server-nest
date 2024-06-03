import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDTO } from './dto/loginuser.dto';
import { AuthGuard } from './user.guard'

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // 登录
    @Post('login')
    async login(@Body() loginUserDTO: LoginUserDTO) {
        return this.userService.findOne(loginUserDTO);
    }

    // 验证token
    @UseGuards(AuthGuard)
    @Get('registed')
    async tokens(@Request() req) {
        console.log(req);
        
        return req.user;
    }
}
