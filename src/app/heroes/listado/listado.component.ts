import { Component } from "@angular/core";

@Component({
  selector: 'app-listado',
  templateUrl: 'listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe() {
    // let heroeBorrado = this.heroes.shift();
    // console.log("borrando...", heroeBorrado);
    // this.heroeBorrado = heroeBorrado;

    this.heroeBorrado = this.heroes.shift() || ''; //Si el shift retorna undefined entonces será un string vacío 

    
  }
 }