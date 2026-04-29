import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MICROSERVICE_CLIENTS } from '../constants';
import { UserDto } from 'apps/user/src/DTO/user.dto';

@Controller('user')
export class UserController {
  constructor(
    @Inject(MICROSERVICE_CLIENTS.USER_SERVICE)
    private readonly userServiceClient: ClientProxy,
  ) {}

  @Get()
  getUserByQuery() {
    return this.userServiceClient.send('get-user', {});
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userServiceClient.send('get-user-by-id', { id });
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userServiceClient.send('delete-user', { id });
  }

  @Post()
  createUsesr(@Body() data: UserDto) {
    console.log('User data: ', data);
    return this.userServiceClient.send('create-user', data);
  }
}
