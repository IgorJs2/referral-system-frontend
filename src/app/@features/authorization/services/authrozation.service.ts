import { Injectable } from '@angular/core';
import {map, Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorizationService {
  constructor(private readonly httpClient: HttpClient) {}

  public isVerified (access_token: string){
    return of(false)
  };
}
