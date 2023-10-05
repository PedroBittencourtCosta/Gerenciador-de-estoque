import { User } from '@prisma/client';
import UserRepository from '../repository/UserRepository';
import UserDto from '../dtos/UserDto';

export default class UserService {

  constructor(private userRepository: UserRepository) {

  }

  async getUsers(): Promise<User[]>{
    return this.userRepository.getUsers();
  }

  async saveUser(data: UserDto): Promise<void>{

    const {email} = data;

    const userExist = await this.userRepository.getUser(email);

    if(!userExist) {
      throw new Error('Usuario já cadastrado');
    }
    this.userRepository.createUser(data);
    
  }
}