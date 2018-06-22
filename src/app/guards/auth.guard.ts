import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from '../login/auth.service';
import { snackService } from '../snackbar/snack.service';

 
@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state : RouterStateSnapshot)
    
    : Observable<boolean> | boolean{

      if(this.authService.usuarioEstaAutenticado()){
        
    return true;
    
    }

    this.router.navigate(['/login'])
    
    return false;
  }

}
