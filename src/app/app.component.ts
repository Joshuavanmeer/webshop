import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from "./shared/services/current-user.service";
import { ProductsService } from "./shared/services/products.service";

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
        private currentUserService: CurrentUserService,
        private productsService: ProductsService
    ) {}


    ngOnInit() {
        this.currentUserService.init();
        this.productsService.init();
    }

}
