import { Component } from '@angular/core';
import { UserService } from '../../@shared/services/user.service';
import { AuthorizationService } from '../../@shared/services/authrozation.service';
import { IUserModel } from '../../@shared/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public user_info: IUserModel = {} as IUserModel;
  constructor(
    private userService: UserService,
    private authService: AuthorizationService,
  ) {}

  private ngOnInit() {
    this.userService.getPersonalInfo().subscribe({
      next: (response) => {
        this.user_info = response.data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  public onLogout() {
    this.authService.logout();
  }
}
