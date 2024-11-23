import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateUserRequest, User  } from 'src/proto/user';
import { UserServiceInterface } from 'src/interfaces/user.service.interface';

@Injectable()
export class UserService implements OnModuleInit {
  private userService: UserServiceInterface;

  constructor(@Inject('USER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.client.getService<UserServiceInterface>('UserService');
  }
  getUserById(id: string): Observable<User> {
    return this.userService.GetUserById({ userId: id });
  }

  createUser(dto: CreateUserRequest) : Observable<User> {
    return this.userService.CreateUser(dto);
  }
}

