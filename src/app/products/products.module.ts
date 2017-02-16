import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { ProductsComponent } from "./products.component";
import {SharedProductModule} from "../shared/modules/shared-product.module";

@NgModule({
    imports: [CommonModule, SharedProductModule],
    declarations: [
        ProductsComponent
    ],
    exports: [ProductsComponent],
    providers: []
})

export class ProductsModule {

}
