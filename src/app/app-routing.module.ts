import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authorization',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./@features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
    pathMatch: 'full',
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./@features/authorization/authorization.module').then(
        (m) => m.AuthorizationModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
