import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'starships' , pathMatch: 'full'},
  {
    path: 'starships', loadChildren: () => import('./components/starships/starships.module').then((m) => m.StarshipsModule),
    // canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
