import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async execute({ name, email, admin }: IUserRequest) {

    if (!email)
      throw new Error("Email incorrect");

    const userAlreadyExists = await this.usersRepository.findOne({
      email
    });

    if (userAlreadyExists)
      throw new Error("User already exists");

    const user = this.usersRepository.create({
      name,
      email,
      admin
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };