import { AbstractList } from "./abstractlist";

export class ShoppingCart extends AbstractList {

    private totalPrice: number;

    constructor() {
        super();
    }


    getTotalPrice ():number {
        return 1;
    }

}
