import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ResponseInterceptor } from './response/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors();

  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(port);
}
bootstrap();
