import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Personagem } from './personagem';

@Injectable()



export class PersonagemService {

  
  personagens= [{nome: "legolas", idade: 30,classe: 1, inteligencia: 32,forca: 40,destreza:10,sabedoria:15,carisma:2,resistencia:6, vida:100}]
  
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
  
  escolherpersonagem(select){

    var i;

    for(i = 0; i < this.personagens.length; i++){
      
       if(select == this.personagens[i].nome){
              
        this.nome = this.personagens[i].nome;
        this.idade = this.personagens[i].idade;
        this.classe = this.personagens[i].classe; 
        this.inteligencia = this.personagens[i].inteligencia; 
        this.forca = this.personagens[i].forca;
        this.destreza = this.personagens[i].destreza;
        this.sabedoria = this.personagens[i].sabedoria;
        this.carisma = this.personagens[i].carisma;
        this.resistencia = this.personagens[i].resistencia;
        this.vida = this.personagens[i].vida;
        
       }

    }

  }

  constructor(private http: Http) { }


  consultarcep(cep){

     //Nova variável "cep" somente com dígitos.
        var cep = cep.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {
              
              this.http.get("//viacep.com.br/ws/" + cep + "/json" ).map(m => m.json()).subscribe( param => console.log(param));

            }

        }
  }

consultarcidade(){
      
       return   this.http.get("//ip-api.com/json").map(m => m.json()).subscribe( param => console.log(param));  

   }

   consultaPost(formulario){
   
    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))
    .map(n => n).subscribe(param => console.log(param));





   }
}
