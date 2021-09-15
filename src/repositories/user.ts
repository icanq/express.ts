import { User } from "../models";


export interface UserRepository {
  getUsers(): <Promise<Array<<User>>
}
