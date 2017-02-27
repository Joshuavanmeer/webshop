import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core/src/metadata/directives";
import { CurrentUserService } from "../shared/services/current-user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'ws-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    @Input() private productDetails: any;
    private shoppingCartAction: any;
    private inShoppingCart: boolean = false;


    private addToShoppingCart (ev): void {
        this.currentUserService.addToShoppingCart(this.productDetails);
    }


    removeFromShoppingCart(): void {
        this.currentUserService.removeFromShoppingCart(this.productDetails.id);
    }



    private addToWishList (ev): void {
        this.currentUserService.addToWishList(this.productDetails);
    }


    private navigate (): void {
        this.router.navigate(['/p', this.productDetails.id]);
    }



    constructor(
        private currentUserService: CurrentUserService,
        private router: Router
    ) { }

    ngOnInit() {

        this.inShoppingCart = this.currentUserService.itemOnList('shoppingCart', this.productDetails.id);

        this.shoppingCartAction = this.currentUserService.shoppingCartAction.subscribe(res => {
            if (res) {
                if (res.id === this.productDetails.id && res.action === 'add') this.inShoppingCart = true;
                if (res.id === this.productDetails.id && res.action === 'remove') this.inShoppingCart = false;
            }
        });

    }

}
