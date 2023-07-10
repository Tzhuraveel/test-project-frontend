interface AccessToken {
  accessToken: string;
}
class AuthService {
  private readonly accessToken = "accessToken";
  private readonly refreshToken = "refreshToken";

  public setAccessToken({ accessToken }: AccessToken): void {
    localStorage.setItem(this.accessToken, accessToken);
  }

  public getAccessToken() {
    return localStorage.getItem(this.accessToken);
  }

  public deleteToken() {
    localStorage.removeItem(this.accessToken);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(this.accessToken);
  }
}

export const authService = new AuthService();
