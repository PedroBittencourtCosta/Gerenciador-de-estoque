import { prisma } from '../db/PrismaClient';
import User from '../entity/User';

export default class UserRepository {

  async getUsers(): Promise<User[]>{
    const users = await prisma.user.findMany();
    return users;
  }
}