import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SOURCES } from '../../../../@shared/const/sources.const';
import { AuthorizationService } from '../../../../@shared/services/authrozation.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-authorization-modal',
  templateUrl: './authorization-modal.component.html',
  styleUrls: ['./authorization-modal.component.scss'],
})
export class AuthorizationModalComponent implements OnInit {
  public login_form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  public register_form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    source: new FormControl('', [Validators.required]),
    source_referral: new FormControl('', []),
  });

  public sources: { value: string; viewValue: string }[] = SOURCES;

  public isInvitedByRefferal = false;

  public error: string = '';

  constructor(
    private authService: AuthorizationService,
    private cookieService: CookieService,
    private dialog: MatDialog,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.onSourceChange();
  }

  private onSourceChange() {
    this.register_form.get('source')?.valueChanges.subscribe((e) => {
      this.isInvitedByRefferal = e == 'by_user';
    });
  }

  public onSubmit(type: 'login' | 'register'): void {
    if (type == 'login') {
      if (!this.login_form.valid) {
        return;
      }

      this.authService
        .login(
          this.login_form.get('username')?.value,
          this.login_form.get('password')?.value,
        )
        .subscribe({
          next: (response) => {
            this.cookieService.set('access_token', response.data.access_token);
            this.dialog.closeAll();
            this.router.navigate(['dashboard']);
          },
          error: (response) => {
            this.error = response.error.message;
          },
        });
    } else {
      if (!this.register_form.valid) {
        return;
      }

      this.authService
        .register(
          this.register_form.get('username')?.value,
          this.register_form.get('email')?.value,
          this.register_form.get('password')?.value,
          this.register_form.get('dateOfBirth')?.value,
          this.register_form.get('source')?.value,
          this.register_form.get('source_referral')?.value,
        )
        .subscribe({
          next: (response) => {
            this.cookieService.set('access_token', response.data.access_token);
            this.dialog.closeAll();
            this.router.navigate(['dashboard']);
          },
          error: (response) => {
            this.error = response.error.message;
          },
        });
    }
  }

  protected readonly SOURCES = SOURCES;
}
