import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployedService } from '../services/employed.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import {Employed} from '../types/employed'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  registerForm: FormGroup;
  private md5= new Md5();
  constructor(private employedService: EmployedService,
    private router:Router,
    private formBuilder: FormBuilder) { 
    
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      dni: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  
  onSubmit(user){
    this.Login(user);
  }
  Login(user){
    let psw = this.md5.appendStr(user.password).end();
    this.employedService.FindUser(user.dni).subscribe( r => {
      const dato:any = Object.assign({}, r);
      if(dato.password == psw){
        localStorage.setItem("User", JSON.stringify(dato));
        this.router.navigate(['/dashboard']);
      }});
    }
}
