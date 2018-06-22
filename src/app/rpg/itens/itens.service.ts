import { Injectable } from '@angular/core';
import { Itens } from './itens';

@Injectable()
export class ItensService {


  itens:Itens[] = [{nome:"pocao VIDA", descrição:"Recupera sua vida",hp:100 ,força:100 ,resitencia:0 ,destreza:0},
                   {nome:"pocao resistencia", descrição:"aumenta sua ressitência",hp:0 ,força:0 ,resitencia:100 ,destreza:0},
                   {nome:"pocao forca", descrição:"Aumenta sua força",hp:0 ,força:100 ,resitencia:0 ,destreza:0},
                   {nome:"pocao destreza", descrição:"Aumenta a Destreza",hp:0 ,força:0 ,resitencia:0 ,destreza:100}];


  constructor() { 


  }

  



}
