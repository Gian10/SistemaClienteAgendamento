import { AuthService } from './../auth.service';
import { Usuario } from './usuario';
import { Component } from '@angular/core';
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
    
    try{
      let res = await this.authService.tentarLogar(userLogin)
      this.router.navigate([''])      
    }catch(erro){
     this.alerta = false
    }
     
      

    

   
    
       //this.router.navigate(['']);
    
  
    
  }
}
