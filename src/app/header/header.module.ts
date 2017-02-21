import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { ProductsMinifiedComponent } from "../products-minified/products-minified.component";
import { SharedProductModule } from "../shared/modules/shared-product.module";
import { ShoppingCartMenuComponent } from "../shoppingcart-menu/shoppingcart-menu.component";



@NgModule({
    imports: [CommonModule, SharedProductModule],
    declarations: [
        HeaderComponent,
        ProductsMinifiedComponent,
        ShoppingCartMenuComponent
    ],
    exports: [HeaderComponent],
    providers: []
})


export class HeaderModule {

}
