import { Controller, Get, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AuthServiceClient, User } from '../proto/auth.pb';

@Controller('auth')
export class AuthController {
  private authService: AuthServiceClient;

  constructor(@Inject('AUTH_SERVICE') private client: ClientGrpc) {
    this.authService = this.client.getService<AuthServiceClient>('AuthService');
  }

  @Get('/users')
  getUsers(): Observable<User[]> {
    return this.authService.getAllUsers({});
  }
}
