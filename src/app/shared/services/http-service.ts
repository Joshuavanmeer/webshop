import { Injectable } from '@angular/core';
import { Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {

    private userId: string;
    private header: Headers = new Headers({'Content-type': 'application/json'});
    private usersUrl: string = 'https://ng-webshop.firebaseio.com/users';
    private cartUrl: string = 'https://ng-webshop.firebaseio.com/users';
    private productUrl: string = 'https://ng-webshop.firebaseio.com/products.json';



    // sets and builds urls for service to connect to db
    setUser (id: string) {
        this.userId = id;
        this.usersUrl += '/' + this.userId + '.json';
    }


    // builds url to send data to
    getUserData () {
        const url = this.usersUrl;
        return this.getData(url);
    }



    private getData(url: string): Observable<any> {
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
    }



}
