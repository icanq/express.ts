import { UserRepository } from "../user";
import { injectable } from "inversify";
import { getRepository } from "typeorm";
import { User } from "../../models";

@injectable()
export class UserImplementation implements UserRepository {
  async getUsers() {
    const userRepository = getRepository(User);
    return userRepository.find();
  }
}
