import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    canActivate: [isAuthorizedGuard],
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'authorization',
    canActivate: [isAuthorizedGuard],
    loadChildren: () =>
      import('./@features/authorization/authorization.module').then((m) => m.AuthorizationModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
