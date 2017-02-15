import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";

@Component({
  selector: 'ws-product-ui',
  templateUrl: './product-ui.component.html',
  styleUrls: ['./product-ui.component.css']
})
export class ProductUiComponent implements OnInit {


    @Input() private inShoppingCart: boolean = false;
    @Input() private onWishList: boolean = false;
    @Input() private productId: string;

    constructor() { }

    ngOnInit() {
    }

}
