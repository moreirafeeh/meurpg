import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonagemService } from './personagem.service';
import { RpgService } from '../rpg.service';

@Component({
  selector: 'app-ficha-personagem',
  templateUrl: './ficha-personagem.component.html',
  styleUrls: ['./ficha-personagem.component.css']
})
export class FichaPersonagemComponent implements OnInit {

  personagens = [{}]
  valor1:number = 30;
  @Output() emitirvalor = new EventEmitter();

  constructor(private personaService: PersonagemService, private rpgService:RpgService) {}

  ngOnInit() {
    
    this.personagens = this.personaService.personagens;

  }
  consultarcep(cep){

     this.personaService.consultarcep(cep);

  }
  cidadezinha(){

    this.personaService.consultarcidade();

 }
 
 
 clickoumudou(){

  this.emitirvalor.emit({novoValor: this.valor1})

 }

}
