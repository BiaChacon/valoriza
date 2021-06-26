import { getCustomRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";
import { TagsRepository } from "../repositories/TagsRepository";
import { classToPlain } from "class-transformer";

class ListTagsService {
  private tagsRepository: Repository<Tag>

  constructor() {
    this.tagsRepository = getCustomRepository(TagsRepository);
  }

  async execute() {
    const tags = await this.tagsRepository.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };