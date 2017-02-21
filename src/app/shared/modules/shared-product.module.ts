import { NgModule } from "@angular/core/src/metadata/ng_module";
import { ProductComponent } from "../../product/product.component";
import { ShoppingCartButtonComponent } from "../../shoppingcart-button/shoppingcart-button.component";
import { WishListButtonComponent } from "../../wishlist-button/wishlist-button.component";
import { TotalPriceComponent } from "../../total-price/total-price.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [
        ProductComponent,
        ShoppingCartButtonComponent,
        WishListButtonComponent,
        TotalPriceComponent
    ],
    exports: [
        ProductComponent,
        ShoppingCartButtonComponent,
        WishListButtonComponent,
        TotalPriceComponent
    ]
})

export class SharedProductModule {

}
