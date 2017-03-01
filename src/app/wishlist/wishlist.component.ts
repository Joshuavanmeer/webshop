import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from "../shared/services/current-user.service";
import { Product } from "../shared/classes/product";

@Component({
  selector: 'ws-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

    private products: Product[];


    constructor(
        private currentUserService: CurrentUserService
    ) { }



    ngOnInit() {

        this.products = this.currentUserService.connect('wishList').getProducts();

    }

}
