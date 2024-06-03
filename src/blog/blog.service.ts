import { Injectable } from '@nestjs/common';
import { Blog } from './blog.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create.dto';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private readonly blogRepository: Repository<Blog>
    ) {}

    // 查询所有博客
    async findAll(author: string = '', keyword: string = '') {
        const condition = {}
        if (author) {
            condition['author'] = author;
        }
        if (keyword) {
            condition['title'] = Like(`%${keyword}%`);
        }
        return await this.blogRepository.find({
            where: condition,
            order: { createAt: 'DESC' }
        });
    }

    // 查询单个博客
    async findOne(id: number) {
        return await this.blogRepository.findOneBy({ id });
    }

    // 创建博客
    async create(blog: CreateBlogDto) {
        return await this.blogRepository.save(blog);
    }

    // 更新博客
    async update(id: number, blog: CreateBlogDto) {
        return await this.blogRepository.update(id , blog);
    }

    // 删除博客
    async remove(id: number) {
        return await this.blogRepository.delete(id);
    }
}
