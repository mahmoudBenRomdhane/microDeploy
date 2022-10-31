import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './models/user.model';
import { CreateUserInput } from './dto/create-user.input';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    return await this.userRepository.save(user);
  }

  async findOne(userId: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    if (!user) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return user;
  }

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find();
  }

  async remove(userId: string): Promise<any> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    await this.userRepository.remove(user);
    return {
      message: 'user removed successfully',
    };
  }
}
