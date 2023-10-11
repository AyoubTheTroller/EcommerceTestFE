import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'login', 
    loadChildren: () => import('./login-or-signup-page/login-or-signup-page.module').then(m => m.LoginOrSignupPageModule) 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/login' } // wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
