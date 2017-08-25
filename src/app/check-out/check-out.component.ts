import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent { 
  shipping = {}; 
  
  placeOrder() {
    console.log(this.shipping);
  }    
}
