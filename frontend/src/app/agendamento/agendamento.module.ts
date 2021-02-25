import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AgendamentoComponent],
  imports: [
    CommonModule,
    AgendamentoRoutingModule,
    FormsModule,
    RouterModule
  ], exports :[
    AgendamentoComponent
  ]
})
export class AgendamentoModule { }
