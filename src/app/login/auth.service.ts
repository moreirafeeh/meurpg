import { Injectable, Output } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { snackService } from '../snackbar/snack.service';

@Injectable()
export class AuthService {

private usuarioAutenticado:boolean = false;

mostrarMenuEmitter = new EventEmitter<boolean>();

constructor(private router:Router, private notificationService:snackService) {}



usuarios: Usuario[]=[{ 

  nome:"clara",
  senha:"123",
  sobrenome:"canes",
  tel:"119058645432",
  data:"432432",
  cep:"34324324",
  sexo:"fdfdsf",
  rua:"dffsfd",
  bairro:"olaaaa",
  cidade:"dsdasad",
  estado:"dffsd",
  numero:"3213",
  email:"123",

}]
;


fazerLogin(usuario:Usuario){
  
var i = 0;
for(i = 0; i < this.usuarios.length;i++){

  if(this.usuarios[i].email === usuario.email  && this.usuarios[i].senha === usuario.senha){

 
  this.usuarioAutenticado = true;
  this.notificationService.notify(`ACERTO MIZERAVI`);
  this.mostrarMenuEmitter.emit(true);
  
  this.router.navigate(['/DeD']);

  }
  else{

    
    this.notificationService.notify(`TA ERRADO DOENÇA`);
    
    this.usuarioAutenticado = false;
    
    this.mostrarMenuEmitter.emit(false)
  }
}

}

usuarioEstaAutenticado(){

  return this.usuarioAutenticado;

}




}
