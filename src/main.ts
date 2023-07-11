import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HelperInterceptor } from './helper.interceptor';
import { useContainer } from 'class-validator';
import { join } from 'path';
//import './typings';
import { Logger } from '@nestjs/common';
import { GlobalExceptionFilter } from './global-exception.filter';

import * as bodyParser from 'body-parser';

async function bootstrap() {

  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe({
    transform:true
  }))
  app.useGlobalInterceptors(new HelperInterceptor());
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.use( bodyParser.json({limit: '100mb'}) );
  app.use(bodyParser.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit:50000
  }));


  await app.listen(21012);
}
bootstrap();
