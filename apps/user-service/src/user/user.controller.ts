import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserService } from './user.service';
import { GetUserByIdResponse, GetUserByIdRequest, CreateUserRequest, CreateUserResponse } from '../proto/user';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'GetUser')
  getUsers(request: GetUserByIdRequest): GetUserByIdResponse {
    return this.userService.getUser(request);
  }

  @GrpcMethod('UserService', 'CreateUser')
  createUser(request: CreateUserRequest): CreateUserResponse {
    return this.userService.createUser(request);
  }
}