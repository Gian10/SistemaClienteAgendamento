import { AgendamentoServiceService } from './../../agendamento-service.service';
import { Component, OnInit } from '@angular/core';
import {Agendamento} from '../../agendamento/agendamento/agendamento'
import {DatePipe} from '@angular/common'
import { data } from 'jquery';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css'],
  providers:[DatePipe]
})
export class AgendamentoComponent implements OnInit {

  agendamento: Agendamento;
  
  dataServico: string ;
  //hora : string[];
  horario: string;
  //servicoEscolhido : string[];
  servico: string;

  //public dataAtual : Date = new Date(Date.now())
  dataAtual = new Date();

  


  constructor(private agendamentoServiceService : AgendamentoServiceService) { 
    this.agendamento = new Agendamento();
    
  }

  ngOnInit(): void {
    let dataHoje = this.dataAtual.toLocaleDateString()
    this.dataServico = dataHoje
  }

  onSubmit(){
    console.log(this.dataServico, this.horario, this.servico);

  }

  dataSelecionada(event){
      this.agendamentoServiceService.getHorarioOcupados(event.target.value)
      .then(datasOcupadas => console.log(datasOcupadas))
      .catch(_ => console.log("erro"))
  }

  
}
