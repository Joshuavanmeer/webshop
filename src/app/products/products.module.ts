import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { ProductsComponent} from "./products.component";
import { ProductComponent } from "../product/product.component";
import { ShoppingCartButtonComponent } from "../shoppingcart-button/shoppingcart-button.component";
import { WishListButtonComponent } from "../wishlist-button/wishlist-button.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
        ProductsComponent,
        ProductComponent,
        ShoppingCartButtonComponent,
        WishListButtonComponent
    ],
    exports: [ProductsComponent],
    providers: []
})

export class ProductsModule {

}
