import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'starships' , pathMatch: 'full'},
  {
    path: 'starships', loadChildren: () => import('./modules/starships/starships.module').then((m) => m.StarshipsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'starship', loadChildren: () => import('./modules/starhip-details/starhip-details.module').then((m) => m.StarshipDetailsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login', loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register', loadChildren: () => import('./modules/register/register.module').then((m) => m.RegisterModule),
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
