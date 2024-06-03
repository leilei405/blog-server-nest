import { Injectable } from '@nestjs/common';
import { Blog } from './blog.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBlogDto } from './dto/create.dto';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Blog)
        private readonly blogRepository: Repository<Blog>
    ) {}

    async findOne(id: number) {
        return await this.blogRepository.findOneBy({ id });
    }

    async create(blog: CreateBlogDto) {
        return await this.blogRepository.save(blog);
    }
}
