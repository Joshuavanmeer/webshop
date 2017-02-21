import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'ws-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.css']
})
export class TotalPriceComponent implements OnInit {

    @Input() totalPrice: number;


    constructor() { }

    ngOnInit() {
    }

}
