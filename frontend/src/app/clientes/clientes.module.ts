import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClientesFormComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    RouterModule
  ], 
  exports:[
    ClientesFormComponent
  ]
})
export class ClientesModule { }
