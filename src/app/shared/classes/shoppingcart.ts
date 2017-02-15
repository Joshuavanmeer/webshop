import { AbstractList } from "./abstractlist";

export class ShoppingCart extends AbstractList {

    private totalPrice: number;
    private data: any;

    constructor(obj) {
        super();
        this.data = obj;
    }

}
