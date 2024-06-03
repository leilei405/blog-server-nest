import { Controller, Delete, Get, Param, Query } from '@nestjs/common';

// ts 装饰器语法  nest 常见的使用方式
// 设计模式  装饰器模式
@Controller('blog') // blog 暂且理解为路由的path
export class BlogController {
    @Get()
    async findAll( @Query('name') name: String, @Query('age') age: Number) {
       console.log(name, age, '获取列表数据');
        return 'this is blog';
    }

    // 动态路由的参数
    @Get(":id") // 动态路由的参数 param
    async findOne(@Param('id') id: string) {
       console.log(id); // 动态路由参数id
        return 'a';
    }

    // 删除
    @Delete(":id")
    async remove(@Param('id') id: string) {
        console.log(id);
        return { id };
    }
}
