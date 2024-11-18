import 'reflect-metadata';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const port = configService.get<number>('PORT');

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.enableCors();

  app.useGlobalInterceptors();

  const config = new DocumentBuilder()
    .setTitle('Notes Turner API')
    .setDescription('The Notes Turner API description')
    .addTag('notes')
    .addTag('tags')
    .addTag('users')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(port);
}
bootstrap();
