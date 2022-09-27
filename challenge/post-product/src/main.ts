import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './http/filters/http-exception.filter';
import { TimeoutInterceptor } from './http/interceptors/timeout.interceptor';
const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app
    .listen(5050)
    .then(() => logger.log('Server is listening'))
    .catch((error) => logger.log(error));
}
bootstrap();
