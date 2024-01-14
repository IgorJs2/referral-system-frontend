import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {
  IResponseModel,
  ITokenResponse,
  IVerificationResponse,
} from '../models/response.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthorizationService {
  constructor(
    private readonly httpClient: HttpClient,
    private router: Router,
    private cookieService: CookieService,
  ) {}

  public verificateToken(access_token: string) {
    return this.httpClient
      .get<IVerificationResponse>(`${environment.apiUrl}/api/auth/verificate`, {
        headers: {
          Authorization: 'Bearer ' + access_token,
        },
      })
      .pipe(
        map((response) => response.isValid),
        catchError((error) => {
          console.error('Token verification failed', error);
          return of(false);
        }),
      );
  }

  public login(username: string, password: string) {
    return this.httpClient.post<IResponseModel<ITokenResponse>>(
      `${environment.apiUrl}/api/auth/login`,
      {
        username,
        password,
      },
    );
  }

  public register(
    username: string,
    email: string,
    password: string,
    dateOfBirth: string,
    source: string,
    source_referral: string,
  ) {
    return this.httpClient.post<IResponseModel<ITokenResponse>>(
      `${environment.apiUrl}/api/auth/register`,
      {
        username,
        email,
        password,
        dateOfBirth: new Date(dateOfBirth).toISOString(),
        source,
        source_referral,
      },
    );
  }

  public logout() {
    this.cookieService.delete('access_token');
    this.router.navigate(['authorization']);
  }
}
