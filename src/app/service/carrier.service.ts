import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../interfaces/iuser';
import { Carrier } from '../models/carrier';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  user!:Iuser

  baseUrl:string = 'https://springboot-poc-devhive.azurewebsites.net'
  cabecera: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http:HttpClient) { }

  getUser = () => {
    return this.user
  }
  setUser = (user:User) => {
    return this.user = user
  }
  getCarriers$():Observable<Carrier[]>{
    return this.http.get<Carrier[]>(`${this.baseUrl}/tracking`)
  }

  getCarrierById$(id:number):Observable<Carrier>{
    return this.http.get<Carrier>(`${this.baseUrl}/tracking/${id}`)
  }

  addCarrier$(carrier:Carrier):Observable<Carrier>{
    const headers = this.cabecera
    return this.http.post<Carrier>(`${this.baseUrl}/tracking/`,carrier,{headers})
  }
}
