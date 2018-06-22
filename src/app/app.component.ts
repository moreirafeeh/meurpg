import { Component, OnInit } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{

  mostraMenu:boolean = false;
  title = 'app';

  constructor(private authService:AuthService ){ }

   ngOnInit(){

      this.authService.mostrarMenuEmitter.subscribe( mostrar => this.mostraMenu = mostrar); 
       
    }
  
}
