import { Injectable } from '@nestjs/common';
import {
  User,
  GetUserByIdResponse,
  GetUserByIdRequest,
  CreateUserRequest,
  CreateUserResponse,
} from '../proto/user';

@Injectable()
export class UserService {
  private users: User[] = [];

  getUser(request: GetUserByIdRequest): GetUserByIdResponse {
    const user = this.users.find((u) => u.id === request.userId);
    if (!user) {
      throw new Error('User not found');
    }
    return { user };
  }

  createUser(request: CreateUserRequest): CreateUserResponse {
    const newUser: User = {
      id: (this.users.length + 1).toString(),
      name: request.name,
      email: request.email,
    };
    this.users.push(newUser);
    return { userId: newUser.id, status: 'success' };
  }
}
