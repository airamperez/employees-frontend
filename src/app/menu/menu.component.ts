import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { EmployedService } from '../services/employed.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user;
  autenticated;
  registerForm: FormGroup;
  constructor(private employedService: EmployedService,
    private router:Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    localStorage.removeItem("User");
    this.autenticated=false;
    this.registerForm = this.formBuilder.group({
      dni: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  logout(){
    localStorage.removeItem("User");
    this.router.navigate(["/Login"])
    this.autenticated=false;
    this.user = undefined;
    this.registerForm = this.formBuilder.group({
      dni: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit(user){
    this.Login(user);
  }
  changeView(){
    this.router.navigate(['/dashboard']);
  }
  Login(user){

    let usuario;
    this.employedService.FindUser(user.dni).subscribe((r) => {
      usuario = r;
    })
    this.employedService.veryfi(user).subscribe(verified=>{
      if(verified){
        localStorage.setItem("User", JSON.stringify(usuario));
        this.autenticated = true;
        this.user = usuario;
        this.changeView()
      }
    })
  }
}