import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./Heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[ //Lo que incluye en Modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[//lo que solo se va utilizar
        ListadoComponent
    ],
    imports:[//esta clase se importa cuando se utilizan directivas avanzadas de Angular Ejemplo: *ngFor, etc
        CommonModule
    ]
})
export class HeroesModule{//Nombre de la clase del mudulo que se va utilizar. Es el que se llama en el App Module principal.

}