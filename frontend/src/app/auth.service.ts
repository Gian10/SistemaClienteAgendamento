
import { environment } from './../environments/environment';
import { Observable, of, throwError } from 'rxjs';
import { Usuario } from './login/usuario';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';

import {JwtHelperService} from '@auth0/angular-jwt'
import { catchError, map } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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


  
  salvar(usuario : Usuario): Observable<string>{
    return this.http.post<any>(this.apiURL, usuario);
  }
  
   async tentarLogar(usuario : Usuario ): Promise<Login>{
      let result = await this.http.post<Login>(`${environment.apiURLBase}/login`,usuario).toPromise()
      localStorage.setItem('access_token', result.token), 
      localStorage.setItem('nameUser', result.name),
      localStorage.setItem('idUser', result.idUser)
      return result
  }

  //   private getServerErrorMessage(error: HttpErrorResponse): number {
  //     switch (error.status) {
  //         case 400:{
  //           return this.errorStatus = 400;
  //         }
  //         default: {
  //             return this.errorStatus = 500;
  //         }
  //     }
  // }

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if(tokenString){
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

