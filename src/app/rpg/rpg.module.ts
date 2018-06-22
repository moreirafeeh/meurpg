import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FichaPersonagemComponent} from '../rpg/ficha-personagem/ficha-personagem.component'
import { DadosComponent } from '../rpg/dados/dados.component'
import { RpgComponent} from '../rpg/rpg.component'
import { PersonagemService} from '../rpg/ficha-personagem/personagem.service'
import { MapaComponent } from '../rpg/mapa/mapa.component';
import { MonstrosComponent } from './monstros/monstros.component';
import { MonstrosService } from './monstros/monstros.service';
import { RpgRoutingModule } from './rpg.routing.module';
import { PersonagemComponent } from '../fichapersonagem/personagem/personagem.component';
import { ItensService } from './itens/itens.service';

@NgModule({
  imports: [
    CommonModule,RpgRoutingModule,
  ],
  declarations: [FichaPersonagemComponent,DadosComponent,MapaComponent,MonstrosComponent,RpgComponent, PersonagemComponent],
    exports : [FichaPersonagemComponent,DadosComponent,MapaComponent,MonstrosComponent,RpgComponent],

    providers:[PersonagemService,MonstrosService, ItensService]
})
export class RpgModule { }
