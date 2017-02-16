import { Injectable } from '@angular/core';
import { User } from "../classes/user";
import { HttpService } from "./http.service";
import { ShoppingCart } from "../classes/shoppingcart";
import { WishList } from "../classes/wishlist";
import {Subject} from "rxjs";


@Injectable()
export class CurrentUserService {


    private user: User;
    private shoppingCart: ShoppingCart = new ShoppingCart();
    private wishList: WishList = new WishList();
    private asyncData: Subject<any> = new Subject<any>();



    // creates a dummy user
    init (): void {
        this.httpService.setUser('-Kd0DbIcXZJgKajr99Dw');
        this.createDummyUser();
    }



    addToShoppingCart (product: any): void {
        this.shoppingCart.addProduct(product);
        this.httpService.addToShoppingCart(product);
        console.log(this.shoppingCart);
    }



    addToWishList (product: any): void {
        this.wishList.addProduct(product);
        this.httpService.addToWishList(product);
        console.log(this.wishList);
    }



    // returns a subject to subscribe to
    // which will indicate async data has been pulled in
    asyncDataReady (): Subject<any> {
        return this.asyncData;
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
                this.wishList.populateList(res.wishList);
                this.shoppingCart.populateList(res.shoppingCart);
                this.asyncData.next();
            }
        );
    }



    constructor(
        private httpService: HttpService
    ) { }

}
