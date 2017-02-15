import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { CurrentUserService } from "../shared/services/current-user.service";
import { ProductsService } from "../shared/services/products.service";

@Component({
  selector: 'ws-product-ui',
  templateUrl: './product-ui.component.html',
  styleUrls: ['./product-ui.component.css']
})
export class ProductUiComponent implements OnInit {


    @Input() private inShoppingCart: boolean = false;
    @Input() private onWishList: boolean = false;
    @Input() private productId: string;



    private handleClick(ev): void {
        const target = ev.target;
        if (target.classList.contains('add-to-shoppingcart-btn')) {
            const product = this.productsService.get(this.productId)[0];
            this.currentUserService.addToShoppingCart(product);
        }
    }




    addToList() {

    }


    toggleButtonState (button: string) {

    }


    constructor(
        private currentUserService: CurrentUserService,
        private productsService: ProductsService
    ) { }

    ngOnInit() {
    }

}
