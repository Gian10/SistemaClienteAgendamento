import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';

import { AgendamentoServiceService } from './agendamento-service.service';
import { ClienteServiceService } from './cliente-service.service';
import { AgendamentoModule } from './agendamento/agendamento.module';
import { ClientesModule } from './clientes/clientes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule} from './template/template.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import {FormsModule} from '@angular/forms';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { ModalConfirmacaoComponent } from './shared/modal-confirmacao/modal-confirmacao.component';
import { ModalErroComponent } from './shared/modal-erro/modal-erro.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ModalConfirmacaoComponent,
    ModalErroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TemplateModule,
    ClientesModule,
    AgendamentoModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    ClienteServiceService,
    AgendamentoServiceService,
    AuthService,
    BsModalRef,,
    BsModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
 