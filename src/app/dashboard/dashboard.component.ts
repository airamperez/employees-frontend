import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  admin: Boolean;
  employed: Boolean;
  user;
  hora;
  dia;
  date = new Date();
  
  constructor() {
    this.User();
  }
  ngOnInit(): void {
    this.Date();
  }

  User(){
    let localUser = localStorage.getItem("User");
    this.user = JSON.parse(localUser);
    
    if(this.user.rol == "Admin"){
      this.admin = true;
      this.employed= false;
    }
    else{
      this.employed=true;
      this.admin=false;    }
  }
  

  Date(){
    this.date= new Date();
    let minutos = this.date.getMinutes();
    let horas = this.date.getHours();
    let segundos = this.date.getSeconds();
    this.hora =  horas + ":"+minutos+":"+segundos;
    let diaNew = this.date.getDate();
    let mes = this.date.getMonth();
    let año = this.date.getFullYear();
    this.dia = diaNew+"-"+mes+"-"+año;

  }
  
}

