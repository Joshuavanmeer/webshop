import { Injectable } from '@angular/core';
import { User } from "../classes/user";
import { ShoppingCart } from "../classes/shoppingcart";
import { WishList } from "../classes/wishlist";

import { Subject } from "rxjs";
import 'rxjs/Rx';
import 'rxjs/add/operator/scan';

@Injectable()
export class CurrentUserService {

    private user: User





    private wishList: Subject<any> = new Subject<any>();
    private shoppingCart: ShoppingCart;
    sub: any;

    wishList$;




    createDummyUser(): void {
        this.user = new User();
    }




    constructor() {
        this.wishList$ = this.wishList.scan((acc, cur) => acc + cur * 3);

        // this.sub = this.wishList$.subscribe(res => {
        //     console.log(res);
        // })

    }




}
