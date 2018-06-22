import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Usuario } from '../login/usuario';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  
usuario:Usuario[] = [{

    nome:"",
    sobrenome:"",
    senha:"",
    tel:"",
    data:"",
    cep:"",
    sexo:"",
    rua:"RUA",
    bairro:"BAIRRO",
    cidade:"CIDADE",
    estado:"ESTADO",
    numero:"",
    email:"",

}];
  

  constructor(private http: Http,private authService:AuthService) { }

  ngOnInit() {

    
  }

  onSubmit(form){

   this.authService.usuarios.push(form);
   
   console.log(this.authService.usuarios);
  }
  consultaCEP(cep,form){

    console.log(cep);

   cep = cep.replace(/\D/g, '');

   //Verifica se campo cep possui valor informado.
   if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;
          
       if(validacep.test(cep)) {

      this.http.get(`//viacep.com.br/ws/${cep}/json`).map(dados => dados.json()).subscribe(dados => this.populaDadosForm(dados, form));

       }


   }

  }

  populaDadosForm(dados, form){


    
    /*form.setValue({
     
    
    nome: "",
    sobrenome: "",
    tel: "",
    data: "",
    genero: form.genero ,
    cep:dados.cep,
    rua: dados.logradouro,
    bairro: dados.bairro ,
    cidade: dados.localidade,
    estado:dados.uf,
    numero:null,
    email:null,
    
    });*/

    form.form.patchValue({

      cep: dados.cep,
      rua: dados.logradouro,
      bairro: dados.bairro ,
      cidade: dados.localidade,
      estado:dados.uf,

     });

  }

}
