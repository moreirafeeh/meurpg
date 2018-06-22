import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { RpgComponent } from './rpg/rpg.component';
import { FichaPersonagemComponent } from './rpg/ficha-personagem/ficha-personagem.component';
import { DadosComponent } from './rpg/dados/dados.component';
import { RpgService }  from './rpg/rpg.service'
import{PersonagemService} from './rpg/ficha-personagem/personagem.service' 

import { FormsModule } from '@angular/forms';
import { SobreComponent } from './sobre/sobre.component';
import { LivrosComponent } from './livros/livros.component';
//import { routing } from './app.routing';


import { HttpModule } from '@angular/http'

import { SobreService } from './sobre/sobre.service';
//import { MapaComponent } from './rpg/mapa/mapa.component';
import { MonstrosComponent } from './rpg/monstros/monstros.component';
import { MonstrosService } from './rpg/monstros/monstros.service';
import { AppRoutingModule } from './app.routing.module';
import { RpgRoutingModule } from './rpg/rpg.routing.module';
import { RpgModule } from './rpg/rpg.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CadastroComponent } from './cadastro/cadastro.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SnackbarComponent } from './snackbar/snackbar.component'
import { snackService } from './snackbar/snack.service';

@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    LivrosComponent,
    LoginComponent,
    CadastroComponent,
    SnackbarComponent,
  ],
  imports: [
    BrowserModule, FormsModule ,HttpModule ,AppRoutingModule,RpgModule, BrowserAnimationsModule
  ],
  providers: [RpgService, SobreService, MonstrosService, AuthService, AuthGuard,snackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
