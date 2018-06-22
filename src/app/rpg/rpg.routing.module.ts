import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//import { SobreComponent } from "./sobre/sobre.component";

//import { LivrosComponent } from "../livros/livros.component";
import { ModuleWithProviders } from "@angular/core";
//import { MenuComponent } from "../menu/menu.component"
import { MapaComponent } from "./mapa/mapa.component";
import { RpgComponent } from "./rpg.component";
import { AuthGuard } from "../guards/auth.guard";


const rpgRoutes: Routes = [
 
    { path:'Mapa', component: MapaComponent,
     canActivate: [AuthGuard]   
},
    { path:'DeD', component: RpgComponent},
];

@NgModule({
    imports: [RouterModule.forChild(rpgRoutes)],
    exports: [RouterModule]
})

export class RpgRoutingModule{}