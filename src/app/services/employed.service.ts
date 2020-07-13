import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import {Employed} from'../types/employed';


@Injectable({
  providedIn: 'root'
})
export class EmployedService {
  ReadAllURl = 'http://localhost:3000/employed/readAll';
  createUrl='http://localhost:3000/employed/create';
  findNameUrl='http://localhost:3000/employed/findName/';
  findOneUrl='http://localhost:3000/employed/find/';
  deleteUrl='http://localhost:3000/employed/delete/';
  deleteUrlDni='http://localhost:3000/employed/deleteDNI/';
  fundUserUrl = 'http://localhost:3000/employed/finduser/';
  updateUrl = 'http://localhost:3000/employed/update/';
  verifyUrl = 'http://localhost:3000/employed/verify';

  header = new HttpHeaders().set("Content-type", "application/json")
  constructor(private http : HttpClient) { }

  public readAll(): Observable<any>{
    return this.http.get(this.ReadAllURl,{headers :  this.header});
  }
  public create(employed): Observable<any>{
    return this.http.post(this.createUrl, employed,{headers :  this.header})
  }
  public Find(id:string): Observable<any>{
    return this.http.get(this.findOneUrl+ id,{headers :  this.header});
  }
  public FindUser(dni:string){
    return this.http.get(this.fundUserUrl+ dni,{headers :  this.header});
  }
  public delete(id:string): Observable<any>{
    return this.http.delete(this.deleteUrl+ id,{headers :  this.header});
  }
  public deleteDni(dni:string): Observable<any>{
    return this.http.delete(this.deleteUrlDni+ dni,{headers :  this.header});
  }
  public update(dni:string, employed): Observable<any>{
    return this.http.put(this.updateUrl+ dni, employed, {headers :  this.header})
  }
  public veryfi(employed):Observable<any>{
    return this.http.post(this.verifyUrl, employed,  {headers :  this.header});
  }
  
}
