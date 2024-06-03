import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'


@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    title: string;

    @Column()
    author: string;
    
    @CreateDateColumn()
    createAt: Date;
    
    @UpdateDateColumn()
    updateAt: Date;
}
