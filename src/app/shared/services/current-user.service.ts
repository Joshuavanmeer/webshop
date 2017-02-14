import { Injectable } from '@angular/core';
import { WishList } from "../classes/wishlist";
import { ShoppingCart } from "../classes/shoppingcart";
import 'rxjs/Rx';
import { BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/scan';

@Injectable()
export class CurrentUserService {


    private wishList: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    private shoppingCart: ShoppingCart;

    wishList$;

    addToCart(): void {
        console.log('add to cart');
        this.wishList$.next(20);
        console.log(this.wishList$);
    }




    constructor() {
        this.wishList$ = this.wishList.scan((acc, cur) => acc + cur);
    }




}
