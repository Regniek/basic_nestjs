import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // con este atributo el automaticamente quita todos los datos que no se necesitan del payload a partir del dto
    whitelist: true,
    // con este no lo ignoras sino que genera una alerta de  los atributos extras
    forbidNonWhitelisted: true,
  }));
  await app.listen(3000);
}
bootstrap();
