import { Component, OnInit } from '@angular/core';
import { EmployedService } from '../services/employed.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  selectedEmployed;
  employedse:any;
  registerForm: FormGroup;
  findForm:FormGroup
  constructor(private employedService: EmployedService,
    private router:Router,
    private formBuilder: FormBuilder) { 
  }
  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
      name: [''],
      rol: [''],
      puesto: [''],
      salario: [''],
      horario: [''],
    });
    
    this.findForm = this.formBuilder.group({
        dni: ['', Validators.required],
      });
  }
  onSubmit(user){
    this.Find(user);
  }
  Find(user){
    this.employedService.FindUser(user.dni).subscribe( r => {
      const dato:any = Object.assign({}, r);
      this.selectedEmployed= dato;
      this.registerForm.setValue({
        name: this.selectedEmployed.name,
        rol: this.selectedEmployed.rol,
        puesto: this.selectedEmployed.puesto,
        salario: this.selectedEmployed.salario,
        horario: this.selectedEmployed.horario
      });
    });
    }
  updateUser(employed){
    if(employed.name!= ""){
      this.selectedEmployed.name = employed.name;
    }
    if(employed.rol!= ""){
      this.selectedEmployed.rol = employed.rol;
    }
    if(employed.name!= ""){
      this.selectedEmployed.puesto = employed.puesto;
    }
    if(employed.name!= ""){
      this.selectedEmployed.salario = employed.salario;
    }
    if(employed.name!= ""){
      this.selectedEmployed.horario = employed.horario;
    }
    this.employedService.update(this.selectedEmployed.dni, this.selectedEmployed).subscribe();
  }
  deleteEmployed(id){
    this.employedService.delete(id).subscribe(r=>r);
    this.selectedEmployed=undefined;
    this.registerForm = this.formBuilder.group({
      name: [''],
      rol: [''],
      puesto: [''],
      salario: [''],
      horario: [''],
    });
  }
}

