import { Controller, Get } from '@nestjs/common';

// ts 装饰器语法  nest 常见的使用方式
// 设计模式  装饰器模式
@Controller('blog') // blog 暂且理解为路由的path
export class BlogController {
    @Get()
    async findAll() {
        return 'this is blog';
    }
}
