import { EventEmitter } from "@angular/core";

export class snackService {

notifier = new EventEmitter<string>();

notify(message:string){
    
 
    this.notifier.emit(message)
    

    }


}