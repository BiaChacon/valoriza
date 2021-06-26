import { getCustomRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import { User } from "../entities/User";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UsersRepository } from "../repositories/UsersRepository";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  private complimentsRepository: Repository<Compliment>
  private usersRepository: Repository<User>

  constructor() {
    this.complimentsRepository = getCustomRepository(ComplimentsRepository);
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {

    if (user_sender === user_receiver)
      throw new Error("Incorrect User Receiver");

    const userReceiverExists = await this.usersRepository.findOne(user_receiver);

    if (!userReceiverExists)
      throw new Error("User Receiver does not exists!");

    const compliment = this.complimentsRepository.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await this.complimentsRepository.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };