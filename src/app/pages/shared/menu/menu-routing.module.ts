import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';


const routes: Routes = [
  {
    path: '',
    component:MenuComponent,
    children:[
      // {
      //   path: 'follow-up',
      //   loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      // },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }