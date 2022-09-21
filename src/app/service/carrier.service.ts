import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrier } from '../models/carrier';

@Injectable({
  providedIn: 'root'
})
export class CarrierService {

  baseUrl:string = 'https://springboot-poc-devhive.azurewebsites.net'
  cabecera: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http:HttpClient) { }

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
