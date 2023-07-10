export interface ILoginResponse {
  login: {
    accessToken: string;
    user: IUser;
  };
}

interface IUser {
  id?: number;
  name?: string;
  role?: string;
}
