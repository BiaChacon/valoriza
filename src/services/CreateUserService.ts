import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async execute({ name, email, password, admin }: IUserRequest) {

    if (!email)
      throw new Error("Email incorrect");

    const userAlreadyExists = await this.usersRepository.findOne({
      email
    });

    if (userAlreadyExists)
      throw new Error("User already exists");

    const passwordHash = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      admin
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };