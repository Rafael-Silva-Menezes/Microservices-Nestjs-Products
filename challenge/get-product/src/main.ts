import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './http/filters/http-exception.filter';
import { TimeoutInterceptor } from './http/interceptors/timeout.interceptor';

const logger = new Logger('Main');
const configService = new ConfigService();

async function bootstrap() {
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: [
          `amqp://${configService.get<string>(
            'RABBITMQ_USER',
          )}:${configService.get<string>(
            'RABBITMQ_PASSWORD',
          )}@${configService.get<string>('RABBITMQ_URL')}`,
        ],
        queue: `${configService.get<string>('RABBITMQ_URL')}`,
        noAck: false,
      },
    });

  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new TimeoutInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app
    .listen(3030)
    .then(() => logger.log('Server is listening'))
    .catch((error) => logger.log(error));

  await microservice
    .listen()
    .then(() => logger.log('Microservice is listening'));
}
bootstrap();
