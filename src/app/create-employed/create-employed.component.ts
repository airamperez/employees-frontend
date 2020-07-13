import { Component, OnInit } from '@angular/core';
import { EmployedService } from '../services/employed.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-create-employed',
  templateUrl: './create-employed.component.html',
  styleUrls: ['./create-employed.component.css']
})
export class CreateEmployedComponent implements OnInit {
  registerForm: FormGroup;
  private md5= new Md5();
  constructor(private employedService: EmployedService,
    private router:Router,
    private formBuilder: FormBuilder) { 
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      rol: ['', Validators.required],
      dni: ['', Validators.required],
      password: ['', Validators.required],
      puesto: ['', Validators.required],
      salario: ['', Validators.required],
      horario: ['', Validators.required],
    });
  }
  onSubmit(employed){
    this.CreateEmployed(employed);
  }
  CreateEmployed(employed){
    employed.password = this.md5.appendStr(employed.password).end();
    console.log(employed);
    this.employedService.create(employed).subscribe(r=>r);

  }

}
