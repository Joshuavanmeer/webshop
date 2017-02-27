import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpService } from "../shared/services/http.service";
import { Product } from "../shared/classes/product";
import { CurrentUserService } from "../shared/services/current-user.service";

@Component({
  selector: 'ws-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

    private productId: string;
    private product: Product;
    private inShoppingCart: boolean = false;
    private onWishList: boolean = false;



    private addToShoppingCart(): void {
        this.currentUserService.addToShoppingCart(this.product);
    }



    private addToWishList(): void {
        this.currentUserService.addToWishList(this.product);
    }



    constructor(
        private activatedRoute: ActivatedRoute,
        private httpService: HttpService,
        private currentUserService: CurrentUserService
    ) { }


    ngOnInit() {

        this.activatedRoute.params.subscribe(
            (param) => {
                this.productId = param['id'];
                this.httpService.getProduct(this.productId).subscribe(
                    (res) => {
                        this.product = new Product(
                            this.productId,
                            res.name,
                            res.imgSrc,
                            res.desc,
                            res.category,
                            res.price,
                            res.sku,
                            res.stock
                        );
                    }
                );
            }
        );

        this.currentUserService.asyncDataReady().subscribe(() => {
            this.inShoppingCart = this.currentUserService.itemOnList('shoppingCart', this.productId);
            this.onWishList = this.currentUserService.itemOnList('wishList', this.productId);
        });

    }

}
