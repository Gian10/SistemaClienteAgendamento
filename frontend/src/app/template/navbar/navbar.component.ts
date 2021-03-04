import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public mostraSair : boolean

  public isLogged: boolean;            
  
  constructor(private authService: AuthService, private router :Router) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(res => this.isLogged = res)
    
  }

  logout(){
    this.authService.encerrarSessao();
  }

}
