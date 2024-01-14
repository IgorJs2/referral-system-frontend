import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthorizationModalComponent } from './components/authorization-modal/authorization-modal.component';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent {
  constructor(
    private dialog: MatDialog,
    private cookieService: CookieService,
    private router: Router,
  ) {}

  ngOnInit() {
    if (this.cookieService.get('access_token')) {
      this.router.navigate(['dashboard']);
    } else {
      this.dialog.open(AuthorizationModalComponent, {
        disableClose: true,
      });
    }
  }
}
