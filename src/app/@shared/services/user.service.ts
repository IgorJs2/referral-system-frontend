import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { IResponseModel } from '../models/response.model';
import { IUserModel } from '../models/user.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService,
  ) {}

  public getPersonalInfo() {
    return this.httpClient.get<IResponseModel<IUserModel>>(
      `${environment.apiUrl}/api/user/person`,
      {
        headers: {
          Authorization: 'Bearer ' + this.cookieService.get('access_token'),
        },
      },
    );
  }
}
