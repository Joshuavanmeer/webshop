import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderModule } from "./header/header.module";
import { HomeModule } from "./home/home.module";

import { AppComponent } from './app.component';

import { CurrentUserService } from "./shared/services/current-user.service";
import { HttpService } from "./shared/services/http.service";
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ProductsService } from "./shared/services/products.service";
import { routing } from "./shared/routing/app.routing";

@NgModule({
    declarations: [
        AppComponent,
        ShoppingcartComponent
    ],
    imports: [
        routing,
        BrowserModule,
        FormsModule,
        HttpModule,
        HeaderModule,
        HomeModule
    ],
    providers: [HttpService, CurrentUserService, ProductsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
