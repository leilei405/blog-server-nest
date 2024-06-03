import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards, Request } from '@nestjs/common';
import { CreateBlogDto } from './dto/create.dto';
import { BlogService } from './blog.service';
import { AuthGuard } from '../user/user.guard';

// ts 装饰器语法  nest 常见的使用方式
// 设计模式  装饰器模式
@Controller('blog') // blog 暂且理解为路由的path
export class BlogController {

    constructor (private readonly blogService: BlogService ) {}

    // 查询博客
    @Get()
    async findAll(@Query('keyword') keyword: string, @Query('author') author: string) {
        return await this.blogService.findAll(author, keyword);
    }

    // 动态路由的参数 param
    @Get(":id")
    async findOne(@Param('id') id: string) {
       const data = await this.blogService.findOne(+id);
       return data;
    }

    // 删除博客
    @Delete(":id")
    async remove(@Param('id') id: string) {
        return await this.blogService.remove(+id);
    }

    // 创建博客
    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() createBlogDto: CreateBlogDto, @Request() req) {
        createBlogDto.author = req.user.username;
        const data = await this.blogService.create(createBlogDto);
        return data;
    }

    // 更新博客
    @Patch(":id")
    async update(@Param("id", ParseIntPipe) id: number,@Body() createBlogDto: CreateBlogDto) {
        return await this.blogService.update(id, createBlogDto);
    }
}
