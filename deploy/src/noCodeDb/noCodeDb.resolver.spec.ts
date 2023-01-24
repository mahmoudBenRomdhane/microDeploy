import { Test, TestingModule } from '@nestjs/testing';
import { User } from './models/user.model';
import { UsersResolver } from './noCodeDb.resolver';
import { UsersService } from './noCodeDb.service';

const usersServiceMock = {
  findById: jest.fn((id: string): User => {
    return { id, name: 'Mocked User', role: 'afmin' };
  }),
};

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        { provide: UsersService, useValue: usersServiceMock },
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
