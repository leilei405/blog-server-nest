import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateBlogDto } from './dto/create.dto';
import { BlogService } from './blog.service';

// ts 装饰器语法  nest 常见的使用方式
// 设计模式  装饰器模式
@Controller('blog') // blog 暂且理解为路由的path
export class BlogController {

    constructor (private readonly blogService: BlogService ) {}

    @Get()
    async findAll( @Query('name') name: String, @Query('age') age: Number) {
       console.log(name, age, '获取列表数据');
        return {data: 'this is blog', msg: '获取成功'};
    }

    // 动态路由的参数 param
    @Get(":id")
    async findOne(@Param('id') id: string) {
       const data = await this.blogService.findOne(+id);
       console.log(data);
       
       return data;
    }

    // 删除
    @Delete(":id")
    async remove(@Param('id') id: string) {
        console.log(id);
        return { id };
    }

    // 创建
    @Post() // @Body 收集请求体内容
    async create(@Body() createBlogDto: CreateBlogDto) {
        createBlogDto.author = 'admin';
       console.log(createBlogDto);
       
        const data = await this.blogService.create(createBlogDto);
        return data;
    }

    // 更新
    @Patch(":id") // @Body 收集请求体内容
    async update(
        @Param("id") id: string,
        @Body() createBlogDto: CreateBlogDto
    ) {
        console.log(id, createBlogDto);
        return { data: true, msg: '更新成功' };
    }
}
