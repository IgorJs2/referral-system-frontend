import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AuthGuard} from "./@shared/guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authorization',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./@features/authorization/authorization.module').then((m) => m.AuthorizationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
