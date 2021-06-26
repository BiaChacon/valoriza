import { getCustomRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";
import { ComplimentsRepository } from "../repositories/ComplimentsRepository";

class ListUserReceiveComplimentsService {
  private complimentsRepository: Repository<Compliment>

  constructor() {
    this.complimentsRepository = getCustomRepository(ComplimentsRepository);
  }

  async execute(user_id: string) {
    const compliments = await this.complimentsRepository.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService };