import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: '123456',
      signOptions: { 
        expiresIn: 3600 
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
