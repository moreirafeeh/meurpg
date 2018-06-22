import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';
import {trigger,state, style, transition, animate} from '@angular/animations'
import { snackService } from '../snackbar/snack.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {


  private usuario: Usuario = new Usuario();
  snackVisibility:string  = 'hidden';


  constructor(private authService: AuthService, private notificationService:snackService) { }

  ngOnInit() {
  }

  fazerLogin(){
    
    this.authService.fazerLogin(this.usuario);
    
  }

  toggleSnack(){

    this.snackVisibility = this.snackVisibility === 'hidden'? 'visible':'hidden';

  }

}
