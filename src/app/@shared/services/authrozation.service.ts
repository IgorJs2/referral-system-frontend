import { Injectable } from '@angular/core';
import {catchError, map, Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorizationService {
  constructor(private readonly httpClient: HttpClient) {}

  public isVerified (access_token: string){
    return this.httpClient.post<any>("/test", { token: access_token }).pipe(
      map(response => response.isValid),
      catchError(error => {
        console.error('Token verification failed', error);
        return of(false);
      })
    );
  };
}
