import { prisma } from '../db/PrismaClient';
import UserDto from '../dtos/UserDto';
import User from '../entity/User';

export default class UserRepository {

  async getUsers(): Promise<User[]>{
    const users = await prisma.user.findMany();
    return users;
  }

  async getUser(email: string): Promise<User>{

    const user = await prisma.user.findUnique({where: {email: email}});

    return user;
  }
  
  async createUser(data: UserDto): Promise<User>{

    const {name, email, password} = data;
    const user = await prisma.user.create({data: {name, email, password}});
    
    return user;
  }
}