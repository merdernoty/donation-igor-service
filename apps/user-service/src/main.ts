import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, '../../../proto/user.proto'),
      url: '0.0.0.0:3005',
    },
  });
  await app.listen();
  console.log('UserService gRPC сервер запущен на порту 3005');
}
bootstrap();