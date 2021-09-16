import { Route, Get, Tags, Post as PostMethod, Body, Path } from "tsoa";
import { Post } from "../models";
import { createPost, getPost, getPosts } from "../repositories/post.repository";
import { IPostPayload } from "../types";

@Route("posts")
@Tags("Post")
export default class PostController {
  @Get("/")
  public async getPosts(): Promise<Array<Post>> {
    return getPosts();
  }

  @PostMethod("/")
  public async createPost(@Body() body: IPostPayload): Promise<Post> {
    return createPost(body);
  }

  @Get("/:id")
  public async getPost(@Path() id: number): Promise<Post | null> {
    return getPost(Number(id));
  }
}
