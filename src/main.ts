import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 设置全局路由的前缀
  app.setGlobalPrefix('/api');
  
  await app.listen(3000);
}
bootstrap();
