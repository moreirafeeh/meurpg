import { Component, OnInit } from '@angular/core';
import { SobreService } from './sobre.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  recebe:number = 0;

  constructor( private sobreService : SobreService) { }

  ngOnInit() {
  }

  acrescentar(){

    this.recebe = this.sobreService.acrescentarSobre();

  }

  decrementar(){

    this.recebe = this.sobreService.decrementarSobre();

  }

}
