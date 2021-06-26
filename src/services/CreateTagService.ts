import { getCustomRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";
import { TagsRepository } from "../repositories/TagsRepository";

interface ITagRequest {
  name: string;
}

class CreateTagService {
  private TagsRepository: Repository<Tag>

  constructor() {
    this.TagsRepository = getCustomRepository(TagsRepository);
  }

  async execute({ name }: ITagRequest) {

    if (!name)
      throw new Error("Incorrect name");

    const TagAlreadyExists = await this.TagsRepository.findOne({ name });

    if (TagAlreadyExists)
      throw new Error("Tag already exists");

    const Tag = this.TagsRepository.create({ name });

    await this.TagsRepository.save(Tag);

    return Tag;
  }
}

export { CreateTagService };