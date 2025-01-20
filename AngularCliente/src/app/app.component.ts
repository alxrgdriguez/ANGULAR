import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component'; // Asegúrate de que la ruta es correcta
import { JuegosComponent } from './juegos/juegos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserComponent, JuegosComponent],
  template: `
    <app-user></app-user>

    <style>
      h1 {
        color: red;
      }
    </style>
  `,
})
export class AppComponent {
  title = 'AngularCliente'; // Definición de la propiedad que se muestra en el template
}
