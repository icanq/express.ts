export interface PingResponse {
  message: string;
}

export interface IUserPayload {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IPostPayload {
  title: string;
  content: string;
  userId: number;
}
export interface ICommentPayload {
  title: string;
  content: string;
  userId: number;
}
