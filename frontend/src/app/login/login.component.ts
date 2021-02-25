import { AuthService } from './../auth.service';
import { Usuario } from './usuario';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //usuario: Usuario;
  public email: string;
  public senha: string;

  constructor(private router: Router, private authService : AuthService) { }


  onSubmit(){
    //this.usuario.cliente.email = this.email;
    //this.usuario.cliente.senha = this.senha;
    //console.log(" enviando pra service: "+ this.usuario.cliente.email, this.usuario.cliente.senha)
   // console.log(" enviando pra service: "+ this.email, this.senha)
   let userLogin : Usuario = new Usuario(this.email, this.senha)
   
  try{
    let res = this.authService.tentarLogar(userLogin)
    this.router.navigate(['']);
  }catch(erro){
    console.log("erro")
  }
    
  }
}
