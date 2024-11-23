import { Observable } from 'rxjs';
import { CreateUserRequest, GetUserByIdRequest, User } from 'src/proto/user';

export interface UserServiceInterface {
  GetUserById(request: GetUserByIdRequest): Observable<User>;
  CreateUser(request: CreateUserRequest): Observable<User>;
}
