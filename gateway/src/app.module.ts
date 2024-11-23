import { Module } from '@nestjs/common';
import { GateWayController } from './gateway.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [GateWayController],
})
export class AppModule {}
