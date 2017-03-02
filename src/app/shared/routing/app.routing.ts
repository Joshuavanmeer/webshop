import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "../../home/home.component";
import { ProductPageComponent } from "../../product-page/product-page.component";
import { WishlistComponent } from "../../wishlist/wishlist.component";
import { MyaccountComponent } from "../../myaccount/myaccount.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'p/:id', component: ProductPageComponent },
    { path: 'wishlist', component: WishlistComponent },
    { path: 'myaccount', component: MyaccountComponent }
];


export const routing = RouterModule.forRoot(routes);
