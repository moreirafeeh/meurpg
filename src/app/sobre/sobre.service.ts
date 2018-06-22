import { Injectable } from '@angular/core';

@Injectable()
export class SobreService {

  paginas:number = 0;

  constructor() { }

  acrescentarSobre(){

    return ++this.paginas;

  }
  
  decrementarSobre(){

    return --this.paginas;

  }
}
