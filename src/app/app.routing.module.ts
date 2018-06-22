import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SobreComponent } from "./sobre/sobre.component";

import { LivrosComponent } from "./livros/livros.component";
import { ModuleWithProviders } from "@angular/core";
//import { MapaComponent } from "./mapa/mapa.component";
import { RpgComponent } from "./rpg/rpg.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { CadastroComponent } from "./cadastro/cadastro.component";



const appRoutes: Routes = [
 
    { path:'', component: SobreComponent,
      canActivate: [AuthGuard]
     },
    { path:'livros', component: LivrosComponent,
       
     },
    { path:'sobre', component: SobreComponent,
    
    },
    { path:'login', component: LoginComponent},

    { path:'cadastro', component: CadastroComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}