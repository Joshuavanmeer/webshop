import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "../../home/home.component";
import { ProductPageComponent } from "../../product-page/product-page.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'p/:id', component: ProductPageComponent }
];


export const routing = RouterModule.forRoot(routes);
