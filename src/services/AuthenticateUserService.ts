import { getCustomRepository, Repository } from "typeorm";

import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";

import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  private usersRepository: Repository<User>

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async execute({ email, password }: IAuthenticateRequest) {
    const user = await this.usersRepository.findOne({ email });

    if (!user)
      throw new Error("Email/Password incorrect");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch)
      throw new Error("Email/Password incorrect");

    const token = sign(
      { email: user.email, },
      process.env.SECRET,
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

export { AuthenticateUserService };