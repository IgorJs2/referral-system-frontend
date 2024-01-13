import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
// import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthrozationService} from "./services/authrozation.service";

@NgModule({
  declarations: [AuthorizationComponent],
  imports: [
    AuthorizationRoutingModule,
    // SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    DecimalPipe,
    AuthrozationService
  ],
  exports: [],
})
export class AuthorizationModule {}
