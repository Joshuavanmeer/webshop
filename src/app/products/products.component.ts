import { Component, OnInit } from '@angular/core';
import { Product } from "../shared/classes/product";
import { ProductsService } from "../shared/services/products.service";

@Component({
  selector: 'ws-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


    private products: Product[];

    constructor(private productsService: ProductsService) {

    }

    ngOnInit() {
        this.products = this.productsService.get();
    }

}
