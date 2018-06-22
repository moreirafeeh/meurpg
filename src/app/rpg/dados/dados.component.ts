import { Component, OnInit, Input } from '@angular/core';

import{  RpgService } from '../rpg.service';
import { Validators } from '@angular/forms/src/validators';
import { PersonagemService } from "../ficha-personagem/personagem.service"

@Component({

  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']

})
export class DadosComponent implements OnInit {
  
  @Input() recebeValor:number;

  personagens = [{}]

  dadospersona:any = [];
  clicado:number = 0;
  nome:string;
  idade:number;
  classe:number
  inteligencia:any;
  forca:any;
  destreza:any;
  sabedoria:any;
  carisma:any;
  resistencia:any;
  vida:number = 100


  

  //UMA VARIAVEL QUALQUER PARA RECEBER O SUBSCRIBE

  variavelqualquer:string;
  
  constructor(private personaService: PersonagemService, private rpgService: RpgService) {}

  ngOnInit() {
    

    this.personagens = this.personaService.personagens;
    //this.dadospersona = this.personaService.mostradados();

  }
  consultarcep(cep){

     this.personaService.consultarcep(cep);

  }
  cidadezinha(){

    this.personaService.consultarcidade();

 }

  aleatorizar(nominho, idade, imgclasse){

  this.inteligencia = this.rpgService.lancard10(3);
  this.forca = this.rpgService.lancard10(3);
  this.destreza =this.rpgService.lancard10(3);
  this.sabedoria = this.rpgService.lancard10(3);
  this.carisma = this.rpgService.lancard10(3);
  this.resistencia = this.rpgService.lancard10(3);
  this.clicado++;

//erro aqui>>>
  this.personaService.personagens.push({nome: nominho, idade: idade,classe: imgclasse, inteligencia:this.inteligencia, forca: this.forca, destreza: this.destreza,sabedoria: this.sabedoria, carisma:this.carisma,resistencia: this.resistencia,vida: this.vida});
  console.log(this.personaService.personagens);
  
  }

  selecionarPersonagem(nomeperso){
     
    this.personaService.escolherpersonagem(nomeperso);

}
}
