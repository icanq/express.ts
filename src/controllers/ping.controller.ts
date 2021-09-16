import { Get, Route } from "@tsoa/runtime";
import { PingResponse } from "../types";

@Route("ping")
export default class PingController {
  @Get("/")
  public async getMessage(): Promise<PingResponse> {
    return {
      message: "pong",
    };
  }
}
