import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { ProductsComponent} from "./products.component";
import { ProductComponent } from "../product/product.component";
import { ProductUiComponent } from "../product-ui/product-ui.component";

@NgModule({
    imports: [CommonModule],
    declarations: [ProductsComponent, ProductComponent, ProductUiComponent],
    exports: [ProductsComponent],
    providers: []
})

export class ProductsModule {

}
