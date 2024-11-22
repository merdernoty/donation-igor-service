import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './controllers/auth.controller';
import { DonationController } from './controllers/donation.controller';
import { UserController } from './controllers/user.controller';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname, 'proto/auth.proto'),
        },
      },
      {
        name: 'DONATION_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'donation',
          protoPath: join(__dirname, 'proto/donation.proto'),
        },
      },
      {
        name: 'USER_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(__dirname, 'proto/user.proto'),
        },
      },
    ]),
  ],
  controllers: [AuthController, DonationController, UserController],
})
export class AppModule {}
