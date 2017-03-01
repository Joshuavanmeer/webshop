import { NgModule } from "@angular/core";
import { WishlistComponent } from "./wishlist.component";
import {CommonModule} from "@angular/common";
import { SharedProductModule } from "../shared/modules/shared-product.module";

@NgModule({
    imports: [
        CommonModule, SharedProductModule
    ],
    declarations: [
        WishlistComponent
    ]
})

export class WishlistModule {}
