import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "../../home/home.component";
import { ProductPageComponent } from "../../product-page/product-page.component";
import { WishlistComponent } from "../../wishlist/wishlist.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'p/:id', component: ProductPageComponent },
    { path: 'wishlist', component: WishlistComponent }
];


export const routing = RouterModule.forRoot(routes);
