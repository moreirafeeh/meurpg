import { Component, OnInit } from '@angular/core';

import{  RpgService } from './rpg.service';

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RpgComponent implements OnInit {

  valor1;

  constructor() { 


  }

  ngOnInit() {

    console.log(this.valor1)
    
  }
  emitiuValor(evento){

    this.valor1 = evento.novoValor;

  }

}
