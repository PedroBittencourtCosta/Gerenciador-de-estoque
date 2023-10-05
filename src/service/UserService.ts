import { User } from '@prisma/client';
import UserRepository from '../repository/UserRepository';
import UserDto from '../dtos/UserDto';

export default class UserService {

  constructor(private userRepository: UserRepository) {

  }

  async getUsers(): Promise<User[]>{
    return this.userRepository.getUsers();
  }

  async saveUser(data: UserDto){
    return this.userRepository.createUser(data);
  }
}