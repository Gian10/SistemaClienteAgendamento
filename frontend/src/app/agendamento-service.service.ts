import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Agendamento } from './agendamento/agendamento/agendamento';


@Injectable({
  providedIn: 'root'
})
export class AgendamentoServiceService {

  constructor(private http : HttpClient) { }

  salvarAgendamento(cliente : Agendamento) : Observable<Agendamento>{
     return this.http.post<Agendamento>('http://localhost:8080/clientes', cliente);
     //return this.http.post<Agendamento>(`${this.apiURL}/clientes`, cliente);
   }
}
