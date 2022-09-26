import { Component, OnInit } from '@angular/core';
import { Carrier } from './models/carrier';
import { CarrierService } from './service/carrier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular 13';
  list:Carrier[]
  constructor(private carrierService:CarrierService){
    this.list = []
  }
  
  ngOnInit(): void {
    this.carrierService.getCarriers$().subscribe({
      next:(c:Carrier[])  => {
        console.info('Carrier',c)
        this.list = c
      },
      error:(err)  => {
        console.log(err)
      },
      complete:()  => {
        console.log('complete()')
      },
    })
  }
}
