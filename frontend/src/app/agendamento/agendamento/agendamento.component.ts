import { AgendamentoServiceService } from './../../agendamento-service.service';
import { Component, OnInit } from '@angular/core';
import {Agendamento} from '../../agendamento/agendamento/agendamento'
@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  agendamento: Agendamento;
  dataServico: string;
  //hora : string[];
  horario: string;
  //servicoEscolhido : string[];
  servico: string;

  constructor(private agendamentoServiceService : AgendamentoServiceService) { 
    //this.servicoEscolhido=["Corte", "Sobrancelha", "Barba Normal", "Barba Terapia", "Corte e Sobrancelha", "Corte e Barba Normal", "Corte e Barba Terapia", "Corte, Barba Normal e Sobrancelha", "Corte, Barba Terapia e Sobrancelha"];
    //this.hora=["8:00","8:40", "9:20", "10:00", "10:40", "11:20", "14:00", "14:40", "15:20", "16:00", "16:40", "17:20", "18:00", "18:40"]
    this.agendamento = new Agendamento();
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.dataServico, this.horario, this.servico);
    //this.agendamentoServiceService.salvarAgendamento(this.agendamento).subscribe(response =>{
      //this.agendamento = response;
      //console.log(this.agendamento);
    //})

  }

  dataSelecionada(){
    console.log(this.dataServico)
  }

  //hotarioSelecionado(){
    //console.log(this.horario)
  //}

  // servicoSelecionado(){
  //   console.log(this.servico)
  // }
}
