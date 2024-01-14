export interface IResponseModel<T> {
  statusCode: 200;
  data: T;
}

export interface ITokenResponse {
  access_token: string;
  expires_in: string;
}

export interface IVerificationResponse {
  isValid: boolean;
}
