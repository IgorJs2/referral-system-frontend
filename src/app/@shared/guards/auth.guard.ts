import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthorizationService} from "../../@features/authorization/services/authrozation.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthorizationService) {}

  canActivate(): boolean {
    const accessToken = this.getCookie('access_token');

    if (!accessToken) {
      this.router.navigate(['/authorization']);
      return false;
    }

    return this.authService.isVerified(accessToken);
  }

  private getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }
}
