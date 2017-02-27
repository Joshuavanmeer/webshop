import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductPageComponent } from "./product-page.component";
import { SharedProductModule } from "../shared/modules/shared-product.module";

@NgModule({
    imports: [
        CommonModule, SharedProductModule
    ],
    declarations: [
        ProductPageComponent
    ]
})

export class ProductPageModule {

}
