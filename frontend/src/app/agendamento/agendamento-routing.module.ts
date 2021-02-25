import { AgendamentoComponent } from './agendamento/agendamento.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../auth.guard'
const routes: Routes = [
  {path: 'agendamento', component: AgendamentoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendamentoRoutingModule { }
