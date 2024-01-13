import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthorizationService} from "../services/authrozation.service";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthorizationService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const accessToken = this.getCookie('access_token');

    if (!accessToken) {
      this.router.navigate(['/authorization']);
      return false;
    }

    return this.authService.isVerified(accessToken).pipe(
      map(isValid => {
        if (!isValid) {
          this.router.navigate(['/authorization']);
          return false;
        }
        return true;
      }),
      catchError((err) => {
        console.error(err);
        this.router.navigate(['/authorization']);
        return of(false);
      })
    );
  }

  private getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
}
