import { Component, OnInit } from '@angular/core';
import { EmployedService } from '../services/employed.service';
import { RouterLink, Router} from '@angular/router';
@Component({
  selector: 'app-employed-list',
  templateUrl: './employed-list.component.html',
  styleUrls: ['./employed-list.component.css']
})
export class EmployedListComponent implements OnInit {
  employedList=[];
  selectedEmployed;

  constructor(private employedService: EmployedService,
  private router: Router) { }

  ngOnInit(): void {
    this.employedService.readAll().subscribe(r =>{
      this.employedList=r;
    });
  }
  employedDetails(id){
    console.log("llega");
    this.employedService.Find(id).subscribe(r =>{
      this.selectedEmployed = r;
    });
  }
  delete(dni){
    this.employedService.deleteDni(dni).subscribe(r=>r);
    this.ngOnInit();
    this.selectedEmployed=undefined;
}
}
