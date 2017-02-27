import { NgModule } from "@angular/core/src/metadata/ng_module";
import { ProductComponent } from "../../product/product.component";
import { ShoppingCartButtonComponent } from "../../shoppingcart-button/shoppingcart-button.component";
import { WishListButtonComponent } from "../../wishlist-button/wishlist-button.component";
import { TotalPriceComponent } from "../../total-price/total-price.component";
import { CommonModule } from "@angular/common";
import { DeleteButtonComponent } from "../../delete-button/delete-button.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
        ProductComponent,
        ShoppingCartButtonComponent,
        WishListButtonComponent,
        TotalPriceComponent,
        DeleteButtonComponent
    ],
    exports: [
        ProductComponent,
        ShoppingCartButtonComponent,
        WishListButtonComponent,
        TotalPriceComponent,
        DeleteButtonComponent
    ]
})

export class SharedProductModule {

}
