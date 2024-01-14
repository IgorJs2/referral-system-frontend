import { NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthorizationService } from './services/authrozation.service';
import { Overlay } from '@angular/cdk/overlay';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [ButtonComponent, InputComponent],
  providers: [AuthGuard, AuthorizationService, UserService, MatDialog, Overlay],
  exports: [
    CommonModule,
    ButtonComponent,
    MatDialogModule,
    InputComponent,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ],
})
export class SharedModule {}
