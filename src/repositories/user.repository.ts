import { getRepository } from "typeorm";
import { User } from "../models";
import { IUserPayload } from "../types";

export const getUsers = async (): Promise<Array<User>> => {
  const userRepository = getRepository(User);
  return userRepository.find();
};

export const createUser = async (payload: IUserPayload): Promise<User> => {
  const userRepository = getRepository(User);
  const user = new User();
  return userRepository.save({
    ...user,
    ...payload,
  });
};

export const getUser = async (id: number): Promise<any> => {
  const userRepository = getRepository(User);
  const user = userRepository.findOne({ id: id });
  if (!user) return null;
  return user;
};
