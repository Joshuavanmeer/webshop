import { Injectable } from '@angular/core';
import { User } from "../classes/user";
import { HttpService } from "./http.service";
import { ShoppingCart } from "../classes/shoppingcart";
import { WishList } from "../classes/wishlist";


@Injectable()
export class CurrentUserService {


    private user: User;
    private shoppingCart: ShoppingCart;
    private wishList: WishList;



    // creates a dummy user
    init (): void {
        this.httpService.setUser('-Kd0DbIcXZJgKajr99Dw');
        this.createDummyUser();
    }



    addToShoppingCart (product: any): void {
        this.shoppingCart.addProduct(product);
        console.log(this.shoppingCart);
    }



    // allowes components to connect to current user data
    connect (type: string): any {
        return this[type];
    }



    // creates a single user to emulate a logged in user
    createDummyUser(): void {
        this.httpService.getData('users').subscribe(
            res => {
                this.user = new User(
                    '-Kd0DbIcXZJgKajr99Dw',
                    res.firstName,
                    res.lastName,
                    res.streetName,
                    res.streetNumber,
                    res.streetNumberAddition,
                    res.zipCode,
                    res.city,
                    res.phoneNumber
                );
                this.shoppingCart = new ShoppingCart(res.shoppingCart);
                console.log(res.shoppingCart);
                this.wishList = new WishList(res.wishList);
            }
        );
    }





    constructor(
        private httpService: HttpService
    ) { }

}
