import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
