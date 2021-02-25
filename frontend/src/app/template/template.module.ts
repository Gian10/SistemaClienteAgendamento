import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdutoshomeComponent } from './produtoshome/produtoshome.component';



@NgModule({
  declarations: [NavbarComponent, ProdutoshomeComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent,
    ProdutoshomeComponent,
    HomeComponent]
})
export class TemplateModule { }
