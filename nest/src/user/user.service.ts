import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common'
import { Cache } from 'cache-manager'

import { MongoRepository } from 'typeorm'

import { User } from './entities/user.mongo.entity'

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: MongoRepository<User>,

    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
  ) {}

  createOrSave(user: User) {
    return this.userRepository.save(user)
  }

  async findAll() {
    const cachedAllUsers = await this.cacheManager.get<User[] | undefined>(
      'ALL_USERS',
    )

    if (!cachedAllUsers) {
      const users = await this.userRepository.findOneBy({
        email: '975036719@qq.com',
      })

      // cache all users
      this.cacheManager.set('ALL_USERS', users)

      return users
    }

    return cachedAllUsers
  }
}
