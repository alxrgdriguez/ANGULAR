import { Component, input, output} from '@angular/core';
import { SegundoComponent } from "../segundo/segundo.component";

@Component({
  selector: 'app-primero',
  imports: [SegundoComponent],
  templateUrl: './primero.component.html',
  styleUrl: './primero.component.css'
})
export class PrimeroComponent {

  user = input.required()
  productos = [
    {
      id: 1,
      nombre: "Manzana",
      precio: 5
    },
    {
      id: 2,
      nombre: "Pera",
      precio: 20
    },
    {
      id: 3,
      nombre: "Aguacate",
      precio: 12
    },
    {
      id: 4,
      nombre: "Naranja",
      precio: 10
    },

    {
      id: 5,
      nombre: "Mandarina",
      precio: 15
    },

    {
      id: 6,
      nombre: "Lima",
      precio: 10
    }
    
  ]

  productoSeleccionado!: string;
  verProducto(nombre: string) {
    this.productoSeleccionado = nombre;
    document.getElementById("productoSeleccionado")!.innerHTML = this.productoSeleccionado;
    this.productoSeleccionadoOutPut.emit(nombre);
  
  }

  productoSeleccionadoOutPut = output<string>();

}
