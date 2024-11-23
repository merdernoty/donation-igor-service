import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateUserRequest, GetUserByIdRequest, User } from './proto/user';
import { UserService } from './user/user.service'; 

@Controller('/api')
export class GateWayController {
  constructor(private readonly userService: UserService) {}

  @Get('/user/:userId')
  getUser(@Param('userId', ParseIntPipe) id: string): Observable<User> {
    return this.userService.getUserById(id);
  }

  @Post('/user')
  createUser(@Body() dto: CreateUserRequest): Observable<User> {
    return this.userService.createUser(dto);
  }
}
