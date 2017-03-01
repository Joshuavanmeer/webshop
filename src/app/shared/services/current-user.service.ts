import { Injectable } from '@angular/core';
import { User } from "../classes/user";
import { HttpService } from "./http.service";
import { ShoppingCart } from "../classes/shoppingcart";
import { WishList } from "../classes/wishlist";
import {Subject, BehaviorSubject} from "rxjs";


@Injectable()
export class CurrentUserService {


    private user: User;
    private shoppingCart: ShoppingCart = new ShoppingCart();
    private wishList: WishList = new WishList();
    private asyncData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    shoppingCartAction: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    wishListAction: BehaviorSubject<any> = new BehaviorSubject<any>(null);



    // creates a dummy user
    init (): void {
        this.httpService.setUser('-Kd0DbIcXZJgKajr99Dw');
        this.createDummyUser();
    }



    addToShoppingCart (product: any): any {
        this.httpService.addToShoppingCart(product).subscribe(
            res => {
                product.setRecordId(res.name);
                this.shoppingCart.addProduct(product);
            }
        );
        this.shoppingCartAction.next({ id: product.id, action: 'add' });
    }



    addToWishList (product: any): void {
        this.httpService.addToWishList(product).subscribe(
            res => {
                product.setRecordId(res.name);
                this.wishList.addProduct(product);
                console.log(this.wishList);
            }
        );
        this.wishListAction.next({ id: product.id, action: 'add' });
    }



    removeFromShoppingCart (productId: string): void {
        const recordId = this.shoppingCart.getRecordId(productId);
        this.shoppingCart.removeProduct(productId);
        this.httpService.deleteProduct('shoppingCart', recordId);
        this.shoppingCartAction.next({ id: productId, action: 'remove' });
    }



    removeFromWishList (productId: string): void {
        const recordId = this.wishList.getRecordId(productId);
        this.wishList.removeProduct(productId);
        this.httpService.deleteProduct('wishList', recordId);
        this.wishListAction.next({ id: productId, action: 'remove' });
    }



    itemOnList(type: string, id: string): boolean {
        return this[type].productOnList(id);
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
                console.log('currentUserService Loaded')
                this.asyncData.next(null);
            }
        );
    }



    constructor(
        private httpService: HttpService
    ) { }

}
