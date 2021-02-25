import { Router } from '@angular/router';
import { ClienteServiceService } from './../../cliente-service.service';
import { Component, OnInit } from '@angular/core';
import{Cliente} from '../clientes-form/cliente'
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { ModalConfirmacaoComponent } from 'src/app/shared/modal-confirmacao/modal-confirmacao.component';
import { ModalErroComponent } from 'src/app/shared/modal-erro/modal-erro.component';



@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  
  public cliente : Cliente; 
  public modalRef: BsModalRef;

  constructor( private clienteService : ClienteServiceService , 
    private router : Router, private modalService: BsModalService) { this.cliente = new Cliente();}

  ngOnInit(): void {
  
  }


  onSubmit(){
  //  this.clienteService.salvarCliente(this.cliente).subscribe(response =>{
  //     this.router.navigate(['/login']);
  //  })
   
     this.clienteService.salvarCliente(this.cliente)
      .subscribe(()=> {this.modalRef = this.modalService.show(ModalConfirmacaoComponent)
        this.router.navigate(['/login'])},
      (err) =>  this.modalRef = this.modalService.show(ModalErroComponent))   

  }


  

 
}
