import { Component } from '@angular/core';
import { JuegosComponent } from "../juegos/juegos.component";

@Component({
  selector: 'app-user',
  imports: [JuegosComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
greet() {

  console.log('Hola mundo');
throw new Error('Method not implemented.');
}


  username = 'Alejandro';
  isLoggedIn = false;

}
