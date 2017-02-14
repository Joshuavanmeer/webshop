
import { ShoppingCart } from "./shoppingcart";
import { WishList } from "./wishlist";


export class User {

    private id: number = 1;

    constructor(
        private firstName: string,
        private lastName: string,
        private streetName: string,
        private streetNumber: string,
        private zipCode: string,
        private city: string,
        private phoneNumber: string,
        private wishList: WishList = new WishList(),
        private shoppingCart: ShoppingCart = new ShoppingCart
    ) {}

    addToCart(): void {
        console.log('added something to this users cart bro');
    }


}
