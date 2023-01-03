import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string []=['Batman','Catwoman','Robin','Red hood'];
  
  heroeBorrado: string="";

  borrarHeroe(){
    const heroeBorrado=this.heroes.shift()|| '';
    this.heroeBorrado=heroeBorrado;
    console.log(heroeBorrado);
    
  }

  
}
