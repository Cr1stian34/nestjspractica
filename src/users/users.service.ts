import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Cristian Muyudumbay',
      phone: '0999802143',
    },
    { id: 1, name: 'Karolina Guaman', phone: '0999802143' },
  ];

  getUsers() {
    return this.users;
  }
}
