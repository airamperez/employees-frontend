import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  user=false;
  constructor(){}
  
  loguear(bool){
    console.log("user logeado");
    this.user = bool; 
  }
}
