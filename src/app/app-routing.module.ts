import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './pages/components/auth/login/login.module';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/shared/menu/menu.module').then(m => m.MenuModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/components/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    pathMatch: 'full', 
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
