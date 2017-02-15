import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HomeModule } from "./home/home.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { CurrentUserService } from "./shared/services/current-user.service";
import { HttpService } from "./shared/services/http.service";
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ProductsService } from "./shared/services/products.service";
import { routing } from "./shared/routing/app.routing";
import { ProductUiComponent } from './product-ui/product-ui.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ShoppingcartComponent,
        ProductUiComponent
    ],
    imports: [
        routing,
        BrowserModule,
        FormsModule,
        HttpModule,
        HomeModule
    ],
    providers: [HttpService, CurrentUserService, ProductsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
