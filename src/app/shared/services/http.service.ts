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
    private productUrl: string = 'https://ng-webshop.firebaseio.com/products/';
    private productsUrl: string = 'https://ng-webshop.firebaseio.com/products.json';



    // sets and builds urls for service to connect to db
    setUser (id: string) {
        this.userId = id;
        this.usersUrl = `https://ng-webshop.firebaseio.com/users/${this.userId}.json`;
        this.shoppingCartUrl = `https://ng-webshop.firebaseio.com/users/${this.userId}/shoppingCart`;
        this.wishListUrl = `https://ng-webshop.firebaseio.com/users/${this.userId}/wishList`;
    }



    // builds url to get data from
    getData (type: string) {
        const url = this[type + 'Url'];
        return this.get(url);
    }


    getProduct(productId: string): any {
        const productUrl = this.productUrl + productId + '.json';
        return this.get(productUrl);
    }



    addToShoppingCart (product: Product): any {
        return this.post(this.shoppingCartUrl + '.json', product);
    }



    addToWishList (product: Product): any {
        return this.post(this.wishListUrl + '.json', product);
    }


    deleteProduct(type: string, urlId: string): void {
        const url = this[type + 'Url']+ '/' + urlId + '.json';
        console.log(url);
        this.delete(url).subscribe();
    }



    private get (url: string): Observable<any> {
        return this.http.get(url)
            .map((res: Response) => res.json());
    }



    private post (url: string, body: any): any {
        return this.http.post(url, body, { headers: this.header }).
            map((res: Response) => res.json())
    }



    private delete (url: string): any {
        return this.http.delete(url, {headers: this.header})
            .map(res => res.json());
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
