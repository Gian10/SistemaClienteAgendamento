import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento/agendamento.component';
import { ClientesFormComponent} from './clientes/clientes-form/clientes-form.component'
import { HomeComponent } from './template/home/home.component';
import {AuthGuard} from './auth.guard'

const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path: '', component: HomeComponent},
  {path: 'agendamento', component: AgendamentoComponent, canActivate: [AuthGuard]},
  //{path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children:[
    {path: 'clientes-form', component: ClientesFormComponent},
    //{path: 'agendamento', component: AgendamentoComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
