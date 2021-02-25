import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  constructor(private authService: AuthService, private router :Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.encerrarSessao();
    this.router.navigate(['']);
  }

}
