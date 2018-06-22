import { Component, OnInit } from '@angular/core';
import { PersonagemService } from '../ficha-personagem/personagem.service';
import { MonstrosService } from '../monstros/monstros.service';
import { RpgService } from '../rpg.service';
import { ItensService } from '../itens/itens.service';
import { Itens } from '../itens/itens';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  itens:Itens[];
  
//ATRIBUTOS ALOCADOS DO SERVIÇO DO PERSONAGEM
  nome:string; 
  idade:number;
  classe:number;  
  inteligencia:number;
  forca:number; 
  destreza:number;
  sabedoria:number;
  carisma:number;
  resistencia:number;
  vida:number;
  vidaTotal:number;
  porcentagem:number;

  //ATRIBUTOS DO MONSTRO ALOCADOS NA CLASSE MAPA E ATUALIZADOS NOS SERVIÇOS

  idM:number;
  nomeM:string;   
  inteligenciaM:number;
  forcaM:number; 
  destrezaM:number;
  sabedoriaM:number;
  carismaM:number;
  resistenciaM:number;
  vidaM:number;
  vidaTotalM:number;
  porcentagemM:number;

  //disable do Botao

  disablefugir:boolean = false;

  constructor(private personaService: PersonagemService, private monstroService: MonstrosService,private  rpgService: RpgService,private itensService:ItensService) {
  
    this.nome =  this.personaService.nome;
    this.idade = this.personaService.idade;
    this.classe = this.personaService.classe;
    this.inteligencia = this.personaService.inteligencia;
    this.forca = this.personaService.forca;
    this.destreza = this.personaService.destreza;
    this.sabedoria = this.personaService.sabedoria;
    this.carisma = this.personaService.carisma;
    this.resistencia = this.personaService.resistencia;
    this.vida = this.personaService.vida;
    this.vidaTotal =this.vida;
    this.porcentagem = 100;


  }

  ngOnInit() {

    this.itens = this.itensService.itens;
    
    
  }

  procurarMonstro(){

    var monstrinho = this.rpgService.lancard10(1);

    this.idM = monstrinho;
    this.nomeM = this.monstroService.Monstros[monstrinho].nome;
    this.inteligenciaM = this.monstroService.Monstros[monstrinho].inteligencia;
    this.forcaM = this.monstroService.Monstros[monstrinho].forca;
    this.destrezaM = this.monstroService.Monstros[monstrinho].destreza;
    this.sabedoriaM = this.monstroService.Monstros[monstrinho].sabedoria;
    this.carismaM = this.monstroService.Monstros[monstrinho].carisma;
    this.resistenciaM = this.monstroService.Monstros[monstrinho].resistencia;
    this.vidaM = this.monstroService.Monstros[monstrinho].vida;
    this.vidaTotalM = this.vidaM;
    this.porcentagemM = 100;

    this.disablefugir = true;
    
  }


  atacar(){

    var d4 = this.rpgService.lancard4(1);
    var guardaforca = this.forca;

    if(d4 >= 3 ){

      alert("CRITICAL HIT: DANO TRIPLICADO");
      this.forca = this.forca  * 3;

    }
    
    this.vidaM = this.vidaM - this.forca;
    this.vida  = this.vida - this.forcaM;
    this.porcentagemM = (this.vidaM * 100)/this.vidaTotalM;
    this.porcentagem = (this.vida * 100)/this.vidaTotal;
    this.forca = guardaforca;

    if(this.vidaM <= 0){
    
      alert("MISERAVEL VOCE ME MATOU")

    this.nomeM = null;
    this.inteligenciaM = null; 
    this.forcaM = null;
    this.destrezaM = null;
    this.sabedoriaM = null;
    this.carismaM = null;
    this.resistencia = null;
    this.vidaTotalM = null;
    this.idM = -1;
    this.vidaM = 100;
    this.vida = 100;
    this.porcentagem = 100;
    this.forca =  this.forca + 10;
    this.disablefugir = false;
    }
    else if(this.vida <= 0 ){

      alert("Fui Derrotado")

      this.nome = null;
      this.inteligencia = null; 
      this.forca = null;
      this.destreza = null;
      this.sabedoria = null;
      this.carisma = null;
      this.resistencia = null;
      this.vidaTotal = null;
      this.idM = -1
      this.vidaM = 100;


    }

  }

  fugir(){
        
    var dado = this.rpgService.lancard6(1);

    if(dado > 3){
    
      this.disablefugir = false; 

    }
    else{

      this.vida = this.vida - this.sabedoriaM;

      if(this.vida <= 0 ){

        alert("Fui Derrotado")
  
        this.nome = null;
        this.inteligencia = null; 
        this.forca = null;
        this.destreza = null;
        this.sabedoria = null;
        this.carisma = null;
        this.resistencia = null;
        this.vidaTotal = null;
        this.idM = -1
        this.vidaM = 100;
  
      }

    }

  }
  
  rajadadeFlechas(){

    var dest = this.destreza;
    this.destreza = this.destreza * 6; 

    this.vidaM = this.vidaM - this.destreza;
    this.vida  = this.vida - this.forcaM;
    this.porcentagemM = (this.vidaM * 100)/this.vidaTotalM;
    this.porcentagem = (this.vida * 100)/this.vidaTotal;
    this.destreza = dest;

    if(this.vidaM <= 0){
    
      alert("MISERAVEL VOCE ME MATOU")

    this.nomeM = null;
    this.inteligenciaM = null; 
    this.forcaM = null;
    this.destrezaM = null;
    this.sabedoriaM = null;
    this.carismaM = null;
    this.resistencia = null;
    this.vidaTotalM = null;
    this.idM = -1
    this.vidaM = 100;
    this.vida = 100;
    this.porcentagem = 100;
    this.forca =  this.forca + 10;
    this.destreza = this.destreza + 15;
    this.disablefugir = false;
    }
    else if(this.vida <= 0 ){

      alert("Fui Derrotado")

      this.nome = null;
      this.inteligencia = null; 
      this.forca = null;
      this.destreza = null;
      this.sabedoria = null;
      this.carisma = null;
      this.resistencia = null;
      this.vidaTotal = null;
      this.idM = -1
      this.vidaM = 100;


    }


  }

  usarPotion(nome){

    if(nome === "pocao VIDA"){

      this.vida = this.vida + this.itensService.itens[0].hp; 

    }

  }


}
