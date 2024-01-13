import { NgModule } from '@angular/core';
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationService} from "./services/authrozation.service";

@NgModule({
  providers: [
    AuthGuard,
    AuthorizationService
  ],
  exports: [
  ],
})
export class SharedModule {}
