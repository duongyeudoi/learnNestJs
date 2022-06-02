import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

// function run immediately startup
async function bootstrap() {
  // create instance of app application
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
