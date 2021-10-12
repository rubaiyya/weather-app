import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TendaysComponent } from './tendays/tendays.component';
import { TodayComponent } from './today/today.component';
import { TomorrowComponent } from './tomorrow/tomorrow.component';

const routes: Routes = [
  { path: 'today', component: TodayComponent },
{ path: 'tomorrow', component: TomorrowComponent },
{ path: 'tendays', component: TendaysComponent },
{ path: '',   redirectTo: '/today', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
