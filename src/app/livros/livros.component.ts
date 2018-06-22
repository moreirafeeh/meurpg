import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  mostra:number = 0;
  mostra2:number = 0;
  mostra3:number = 0;
  constructor() { }

  ngOnInit() {
  }

  
  mostrar(){

    this.mostra++;

  }
  naomostrar(){

    this.mostra--;

  }
  mostrar2(){

    this.mostra2++;

  }
  naomostrar2(){

    this.mostra2--;

  }

  mostrar3(){

    this.mostra3++;

  }
  naomostrar3(){

    this.mostra3--;

  }
  

}


 
