import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../@shared/shared.module';
import { AuthorizationModalComponent } from './components/authorization-modal/authorization-modal.component';

@NgModule({
  declarations: [AuthorizationComponent, AuthorizationModalComponent],
  imports: [
    AuthorizationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DecimalPipe],
  exports: [],
})
export class AuthorizationModule {}
