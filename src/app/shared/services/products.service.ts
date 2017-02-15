import { Injectable } from '@angular/core';
import { Product } from "../classes/product";
import { HttpService } from "./http.service";

@Injectable()
export class ProductsService {

    private products: Product = [];



    init(): void {
        this.httpService.getData('products').subscribe(res => {
            console.log(res);
        });
    }

    constructor(private httpService: HttpService) { }

}
