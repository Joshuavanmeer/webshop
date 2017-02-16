import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header.component";
import { ProductsMinifiedComponent } from "../products-minified/products-minified.component";
import { SharedProductModule } from "../shared/modules/shared-product.module";



@NgModule({
    imports: [CommonModule, SharedProductModule],
    declarations: [HeaderComponent, ProductsMinifiedComponent],
    exports: [HeaderComponent],
    providers: []
})


export class HeaderModule {

}
