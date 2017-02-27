import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from "../shared/services/current-user.service";
import { Product } from "../shared/classes/product";

@Component({
  selector: 'ws-shoppingcart-menu',
  templateUrl: './shoppingcart-menu.component.html',
  styleUrls: ['./shoppingcart-menu.component.css']
})
export class ShoppingCartMenuComponent implements OnInit {


    private cartOpen:boolean = false;
    private products: Product[];
    private totalPrice: number[];
    private totalItems: number[];



    private openCart(): void {
        this.cartOpen = this.cartOpen ? false : true;
    }


    private deleteProduct(productId: string): void {
        this.currentUserService.removeFromShoppingCart(productId);
    }


    constructor(
        private currentUserService: CurrentUserService
    ) { }


    ngOnInit() {
        this.products = this.currentUserService.connect('shoppingCart').getProducts();
        this.totalPrice = this.currentUserService.connect('shoppingCart').getTotalPrice();
        this.totalItems = this.currentUserService.connect('shoppingCart').getTotalItems();
    }

}
