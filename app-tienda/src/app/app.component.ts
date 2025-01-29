import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeroComponent } from "./primero/primero.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-tienda';
  usuario="Alejandro";

  productoPulsado ="";
  productoFavorito(nombre: string) {
    this.productoPulsado = nombre;
    document.getElementById("productoPulsado")!.innerHTML = this.productoPulsado;
  }
}
