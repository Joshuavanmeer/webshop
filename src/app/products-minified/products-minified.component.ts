import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from "../shared/services/current-user.service";
import { Product } from "../shared/classes/product";

@Component({
    selector: 'ws-products-minified',
    templateUrl: './products-minified.component.html',
    styleUrls: ['./products-minified.component.css']
})
export class ProductsMinifiedComponent implements OnInit {

    private products: Product[] = [];

    constructor(private currentUserService: CurrentUserService) { }

    ngOnInit() {
        this.currentUserService.asyncDataReady().subscribe(() => {
            this.products = this.currentUserService.connect('shoppingCart').getProducts();
        })
    }

}
