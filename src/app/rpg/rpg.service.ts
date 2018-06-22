import { Injectable } from "@angular/core";
import { Observable} from  'rxjs/Observable'
import 'rxjs/Observable'

@Injectable()

export class RpgService{

   

    lancard4(quantidade){

        var dado;
        var acumulador = 0;
        var i = 1;

        

           dado = Math.random() * 5;
            dado = Math.floor(dado);

            acumulador = acumulador + dado;
            i++;
        
        return acumulador;

    }
    lancard6(quantidade){
        var dado;
        var acumulador = 0;
        var i = 1;

        while(i <= quantidade){

            dado = Math.random() * 6;
            dado = Math.floor(dado);

            while(dado == 0 ){
            
                dado = Math.random() * 6;
                dado= Math.floor(dado);
        
            }

            acumulador = acumulador + dado;
            i++;
        }
        alert("A SOMA DEU: " + acumulador);

        return acumulador;
        
    }
    lancard10(quantidade){
        var dado;
        var acumulador = 0;
        var i = 1;

        while(i <= quantidade){

            dado = Math.random() * 11;
            dado = Math.floor(dado);

            acumulador = acumulador + dado;
            i++;
        }
       
        return acumulador;
    }

    lancard12(quantidade){
        var dado;
        var acumulador = 0;
        var i = 1;

        while(i <= quantidade){

            dado = Math.random() * 12;
            dado = Math.floor(dado);

            while(dado == 0 ){
            
                dado = Math.random() * 12;
                dado= Math.floor(dado);
        
            }

            acumulador = acumulador + dado;
            i++;
        }
        alert("A SOMA DEU: " + acumulador);
        return acumulador;

    }
    lancard20(quantidade){
        var dado;
        var acumulador = 0;
        var i = 1;

        while(i <= quantidade){

            dado = Math.random() * 20;
            dado = Math.floor(dado);

            while(dado == 0 ){
            
                dado = Math.random() * 20;
                dado= Math.floor(dado);
        
            }

            acumulador = acumulador + dado;
            i++;
        }
        alert("A SOMA DEU: " + acumulador);
        return acumulador;
        
    }
    lancard100(quantidade){
        var dado;
        var acumulador = 0;
        var i = 1;

        while(i <= quantidade){

            dado = Math.random() * 100;
            dado = Math.floor(dado);

            while(dado == 0 ){
            
                dado = Math.random() * 100;
                dado= Math.floor(dado);
        
            }

            acumulador = acumulador + dado;
            i++;
        }
        
        alert("A SOMA DEU: " + acumulador);
        return acumulador;
        
    }

    



}