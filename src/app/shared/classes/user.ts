import { ShoppingCart } from "./shoppingcart";
import { WishList } from "./wishlist";


export class User {

    private wishList: WishList = new WishList();
    private shoppingCart: ShoppingCart  = new ShoppingCart();

    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private streetName: string,
        private streetNumber: number,
        private streetNumberAddition: string,
        private zipCode: string,
        private city: string,
        private phoneNumber: string,
        wishListObj,
        shoppingCartObj
    ) {
        this.shoppingCart.populateList(shoppingCartObj);
        this.wishList.populateList(wishListObj);
    }



    addToCart(productId: string): void {
        console.log('added something to this users cart bro');
    }


    log () {
        this.wishList.log();
    }

}
