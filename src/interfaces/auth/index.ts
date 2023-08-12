export interface SNSLoginRes {
  code: string;
  data: {
    accessToken: string;
    refreshToken: string;
    oauthId: string;
    oauthProvider: string;
    nickname: string;
    profileImage: string;
  };
  message: string;
  status: number;
}
