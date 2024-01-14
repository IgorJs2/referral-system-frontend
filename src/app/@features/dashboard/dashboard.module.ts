import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../@shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DecimalPipe],
  exports: [],
})
export class DashboardModule {}
