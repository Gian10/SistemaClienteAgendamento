//import { AppModule } from './app.module';
import { Component, Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'clientes-app';

  
}
