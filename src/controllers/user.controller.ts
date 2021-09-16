import { Body, Get, Path, Post, Route, Tags } from "@tsoa/runtime";
import { User } from "../models";
import { getUser, getUsers, createUser } from "../repositories/user.repository";
import { IUserPayload } from "../types";

@Route("users")
@Tags("User")
export default class UserController {
  @Get("/")
  public async getUsers(): Promise<Array<User>> {
    return getUsers();
  }

  @Post("/")
  public async createUser(@Body() body: IUserPayload): Promise<User> {
    return createUser(body);
  }

  @Get("/:id")
  public async getUser(@Path() id: string): Promise<User | null> {
    return getUser(Number(id));
  }
}
