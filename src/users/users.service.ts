import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
  private users: any = [
    {
      id: 1,
      name: 'Cristian Muyudumbay',
      phone: '0999802143',
    },
    { id: 2, name: 'Karolina Guaman', phone: '0999802143' },
  ];

  getUsers() {
    return this.users;
  }

  createUser(user: CreateUserDTO) {
    const email = this.users.find((u) => u.email === user.email);

    if (email) {
      return 'El usuario ya existe ingrese otro nuevo';
    }

    this.users.push({ ...user, id: this.users.length + 1 });
    return user;
  }
}
