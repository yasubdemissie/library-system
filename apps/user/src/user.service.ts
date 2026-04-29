import { Injectable } from '@nestjs/common';
import { UserDto } from './DTO/user.dto';

@Injectable()
export class UserService {
  private users: ({ id?: string } & UserDto)[] = [
    {
      id: '1',
      username: 'yasub_demissie',
      email: 'yasub_demissie@example.com',
      password: 'password123',
      firstName: 'Yasub',
      lastName: 'Demissie',
      birthDate: new Date('1990-01-01'),
    },
    {
      id: '2',
      username: 'shewaye_kindu',
      email: 'shewaye_kindu@example.com',
      password: 'password123',
      firstName: 'Shewaye',
      lastName: 'Kindu',
      birthDate: new Date('1992-05-15'),
    },
    {
      id: '3',
      username: 'yohannes_tadesse',
      email: 'yohannes_tadesse@example.com',
      password: 'password123',
      firstName: 'Yohannes',
      lastName: 'Tadesse',
      birthDate: new Date('1988-12-10'),
    },
  ];
  getUserById(id: string): UserDto | null {
    const user = this.users.find((u) => u.id === id);
    return user ? { ...user, password: '' } : null; // Exclude password from the response
  }

  getAllUsers(): UserDto[] {
    return this.users.map((user) => ({ ...user, password: '' })); // Exclude passwords from the response
  }

  createNewUser(user: UserDto) {
    const newId = (this.users.length + 1).toString();
    const userWithId = { ...user, id: newId };
    this.users.push(userWithId);
    const newUser = this.users.find((u) => u.email === user.email);
    return newUser ? { ...newUser, password: '' } : null;
  }

  deleteUser(id: string) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      const deletedUser = this.users.splice(index, 1)[0];
      return { ...deletedUser, password: '' }; // Exclude password from the response
    } else {
      return null; // User not found
    }
  }
}
