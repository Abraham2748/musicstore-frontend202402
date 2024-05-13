export interface LoginApiResponse {
  data: {
    token: string;
    expirationDate: string;
  };
  success: boolean;
  errorMessage: string;
}
export interface LoginRequestBody {
  username: string;
  password: string;
}
