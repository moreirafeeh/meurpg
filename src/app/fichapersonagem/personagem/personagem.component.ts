import { Component, OnInit, Input } from '@angular/core';
import { Personagem } from '../../rpg/ficha-personagem/personagem';
import { PersonagemService } from '../../rpg/ficha-personagem/personagem.service';
import { ItensService } from '../../rpg/itens/itens.service';
import { Itens } from '../../rpg/itens/itens';

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

@Input() persona:Personagem;

cor = "teal";
itens:Itens[];

  constructor(private personagemService:PersonagemService, private itensService:ItensService) {


   }

  ngOnInit() {

    this.itens = this.itensService.itens;

  }

  selecionarPersonagem(nome){

    return this.personagemService.escolherpersonagem(nome);
 
  }
  mudacor(){
    
      this.cor = "rgb(62, 72, 129)"
  }
  mudacor2(){

    this.cor = "teal";

  }

}
