import { Injectable } from '@angular/core';
import { Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "../classes/product";
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

    private userId: string;
    private usersUrl: string;
    private shoppingCartUrl: string;
    private wishListUrl: string;
    private header: Headers = new Headers({'Content-type': 'application/json'});
    private productsUrl: string = 'https://ng-webshop.firebaseio.com/products.json';



    // sets and builds urls for service to connect to db
    setUser (id: string) {
        this.userId = id;
        this.usersUrl = `https://ng-webshop.firebaseio.com/users/${this.userId}.json`;
        this.shoppingCartUrl = `https://ng-webshop.firebaseio.com/users/${this.userId}/shoppingCart.json`;
        this.wishListUrl = `https://ng-webshop.firebaseio.com/users/${this.userId}/wishList.json`;
    }



    // builds url to get data from
    getData (type: string) {
        const url = this[type + 'Url'];
        return this.get(url);
    }



    addToShoppingCart (product: Product): void {
        this.post(this.shoppingCartUrl, product).subscribe(res => {
            console.log('added item to shoppingcart in db', res);
        });
    }



    addToWishList (product: Product): void {
        this.post(this.wishListUrl, product).subscribe(res => {
            console.log('added item to wishlist in db', res);
        });
    }



    private get(url: string): Observable<any> {
        return this.http.get(url)
            .map((res: Response) => res.json());
    }



    private post(url: string, body: any): any {
        return this.http.post(url, body, { headers: this.header }).
            map((res: Response) => res.json())
    }






    constructor(private http: Http) {
        // this.post(this.usersUrl, {
        //     firstName: 'Barry',
        //     lastName: 'Bilders',
        //     streetName: 'Nijenrode',
        //     streetNumber: 74,
        //     streetNumberAddition: false,
        //     zipCode: '1274TH',
        //     city: 'Amsterdam',
        //     phoneNumber: '0658472849',
        // }).subscribe(res => {
        //     console.log(res);
        // });

        // this.post(this.productsUrl, {
        //     name: 'Rowing machine',
        //     desc: 'Sweet rowing machine bro',
        //     price: 299.99,
        //     category: 'health',
        //     sku: 'unit',
        //     stock: 10,
        // }).subscribe(res => {
        //     console.log(res);
        // });


    }



}
