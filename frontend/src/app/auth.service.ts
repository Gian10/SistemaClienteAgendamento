
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Usuario } from './login/usuario';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';

import {JwtHelperService} from '@auth0/angular-jwt'

interface Login {
  idUser: string,
  name: string,
  email : string,
  iat: number,
  exp: number,
  token: string
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    apiURL: string = environment.apiURLBase + "/users"
    jwtHelper : JwtHelperService = new JwtHelperService();

  constructor( private http: HttpClient) { }

  
  salvar(usuario : Usuario): Observable<any>{
    return this.http.post<any>(this.apiURL, usuario);
  }
  
   tentarLogar(usuario : Usuario ): Observable<Login>{
    //const params =  new HttpParams().set('username', email).set('password', senha).set('grant_type', 'password')
    //const headers = {'Authorization': 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      //'Content-Type': 'application/x-www-form-urlencoded'
    //}
    
    let res = this.http.post<Login>(`${environment.apiURLBase}/login`,usuario)
    res.subscribe((response)=>{
      localStorage.setItem('access_token', response.token), 
      localStorage.setItem('nameUser', response.name),
      localStorage.setItem('idUser', response.idUser)
    })
    return res;
  }

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if(tokenString){
      //const token = JSON.parse(tokenString).access_token
      return tokenString;
    }
    return null;
  }

  isAuthenticated(): boolean{
    const token = this.obterToken();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  encerrarSessao(){
    localStorage.removeItem('access_token');
  }


}

