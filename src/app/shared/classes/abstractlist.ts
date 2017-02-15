import { Product } from './product';

export abstract class AbstractList {


    // holds a list of products
    list: any[] = [];


    populateList (obj) {
        console.log(obj);
    }


    addProduct (product: Product): void {
        this.list.push(product);
    }


    // retrieves a product based on its id
    getProduct (id: string): Product {
        return this.list.filter(item => item.id === id);
    }


    log (): void {
        console.log(this.list);
    }



}
