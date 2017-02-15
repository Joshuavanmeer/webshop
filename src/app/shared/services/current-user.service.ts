import { Injectable } from '@angular/core';
import { User } from "../classes/user";
import { HttpService } from "./http-service";


@Injectable()
export class CurrentUserService {


    private user: User;


    init (): void {
        this.httpService.setUser('-Kd0DbIcXZJgKajr99Dw');
        this.createDummyUser();
    }



    // creates a single user to emulate a logged in user
    createDummyUser(): void {
        this.httpService.getUserData().subscribe(
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
                    res.phoneNumber,
                    res.wishList,    // populates users wishlist instance
                    res.shoppingCart // populates users shoppingcart instance
                );
            }
        );
    }



    addToCart (product: any): void {
        this.user.addToCart(product);
    }



    constructor(
        private httpService: HttpService
    ) { }

}
