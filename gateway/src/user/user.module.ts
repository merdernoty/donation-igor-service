import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  controllers: [],
  exports: [UserService],
  providers: [UserService],
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'user',
          protoPath: join(__dirname, '../../../proto/user.proto'),
          url: 'localhost:3005',
        },
      },
    ]),
  ],
})
export class UserModule {}
