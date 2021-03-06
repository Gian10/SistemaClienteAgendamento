import { AuthService } from './../auth.service';
import { Usuario } from './usuario';
import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { concat } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //usuario: Usuario;
  public email: string;
  public senha: string;

  public alerta : boolean


  constructor(private router: Router, private authService : AuthService) { }


  async onSubmit(){
    let userLogin : Usuario = new Usuario(this.email, this.senha)
    
    let res = await this.authService.tentarLogar(userLogin)
    if(res){
      this.router.navigate([''])      
    }else{
      this.alerta = false
    }
  
    
  }
}
