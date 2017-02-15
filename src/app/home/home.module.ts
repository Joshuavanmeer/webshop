import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import { CommonModule} from "@angular/common";
import { ProductsModule } from "../products/products.module";

@NgModule({
    imports: [CommonModule, ProductsModule],
    declarations: [
        HomeComponent
    ],
    exports: [HomeComponent],
    providers: []
})

export class HomeModule {

}
