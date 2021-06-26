import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";
import { classToPlain } from "class-transformer";

class ListUserService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async execute() {
    const users = await this.usersRepository.find();

    return classToPlain(users);
  }
}

export { ListUserService };