import { Usuario } from './login/usuario';
//import { Cliente } from './clientes/clientes-form/cliente';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
import { Cliente } from './clientes/clientes-form/cliente';
import { map } from 'rxjs/operators'


interface ResUser{
  message: string,
  statusCode: number
}

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {
    

  //const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  public responseMessage : string

    
  constructor(private http: HttpClient) { }

  public salvarCliente(cliente: Cliente) : Observable<string>{
  
    return this.http.post(`${environment.apiURLBase}/users`, cliente, ) 
    .pipe(map((res : ResUser)=> {return res.message}))  
  
   
    }
  


}
