import { Module } from '@nestjs/common';
import { UsersResolver } from './noCodeDb.resolver';
import { UsersService } from './noCodeDb.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [],
})
export class UsersModule {}
