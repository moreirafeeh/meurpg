import { Injectable } from '@angular/core';

@Injectable()

export class MonstrosService {


  Monstros = [
  { id : 0 ,nome: "Amaradon", inteligencia: 61, forca: 25 , destreza:18, sabedoria:23, carisma:1, resistencia:30, vida:100},
  { id : 1 ,nome: "Valkyrie", inteligencia: 61, forca: 25 , destreza:18, sabedoria:23, carisma:1, resistencia:30, vida:150},
  { id : 2 ,nome: "Poring", inteligencia: 4, forca: 8 , destreza:3, sabedoria: 3 , carisma: 50 , resistencia: 2, vida:50},
  { id : 3 ,nome: "Senhor Dos Mortos", inteligencia: 20, forca: 60 , destreza:18, sabedoria:32, carisma:0, resistencia:30, vida:2000},
  { id : 4 ,nome: "Ente",    inteligencia: 30, forca: 20 , destreza: 7, sabedoria:17, carisma:17, resistencia:12, vida:300},
  { id : 5 ,nome: "Tuminus", inteligencia: 20, forca: 60 , destreza:18, sabedoria:32, carisma:0, resistencia:30, vida:4000},
  { id : 6 ,nome: "Samurai Encarnado", inteligencia: 10, forca: 30 , destreza: 6, sabedoria: 12, carisma:0, resistencia:21, vida:1200},
  { id : 7 ,nome: "Papai cruel", inteligencia:12, forca: 12 , destreza: 30, sabedoria: 9, carisma:60, resistencia:16, vida:900},
  { id : 8 ,nome: "Ego do Pesadelo", inteligencia: 20, forca: 84 , destreza:80, sabedoria:50, carisma:17, resistencia:90, vida:3500},
  { id : 9 ,nome: "Gula", inteligencia: 10, forca: 13 , destreza:27, sabedoria: 17, carisma:5, resistencia: 9, vida:850},

]
  constructor() { }

}
