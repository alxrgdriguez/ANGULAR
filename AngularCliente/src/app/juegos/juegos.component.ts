import { Component } from '@angular/core';

@Component({
  selector: 'app-juegos',
  imports: [],
  template: `
  <ul>

    @for(game of games; track game.id){
      <li>
        <h2>{{ game.name }}</h2>
        <p>{{ game.description }}</p>
        <p>Precio: {{ game.price }} €</p>
      </li>
    }
  </ul>
  `,
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {

  games = [
    {
      id: 1,
      name: 'Counter Strike',
      description: 'Descripción del juego 1',
      price: 10,
    },
    {
      id: 2,
      name: 'Overwatch',
      description: 'Descripción del juego 2',
      price: 20,

    },

    {
      id: 3,
      name: 'League of Legends',
      description: 'Descripción del juego 3',
      price: 30,
    },
  ];
}
