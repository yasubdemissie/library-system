import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserDto } from './DTO/user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('get-user')
  getUser(): UserDto[] | null {
    console.log('Received get-user request');
    return this.userService.getAllUsers();
  }

  @MessagePattern('get-user-by-id')
  getUserById(@Payload() data: { id: string }): UserDto | null {
    console.log('Received get-user-by-id request with id:', data);
    return this.userService.getUserById(data.id);
  }

  @MessagePattern('create-user')
  createUser(@Payload() data: UserDto) {
    return this.userService.createNewUser(data);
  }

  @MessagePattern('delete-user')
  deleteUser(@Payload() id: string) {
    return this.userService.deleteUser(id);
  }
}
