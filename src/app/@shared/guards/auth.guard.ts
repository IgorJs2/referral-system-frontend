import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '../services/authrozation.service';
import { catchError, map, Observable, of } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthorizationService,
    private cookieService: CookieService,
  ) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const accessToken = this.cookieService.get('access_token');

    if (!accessToken) {
      this.router.navigate(['/authorization']);
      return false;
    }

    return this.authService.verificateToken(accessToken).pipe(
      map((isValid) => {
        if (!isValid) {
          this.authService.logout();
          return false;
        }
        return true;
      }),
      catchError((err) => {
        console.error(err);
        this.authService.logout();
        return of(false);
      }),
    );
  }
}
