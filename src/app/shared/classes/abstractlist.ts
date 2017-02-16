import { Product } from './product';

export abstract class AbstractList {


    // holds a list of products
    private list: Product[] = [];
    private lastModified: Product;


    populateList (products: {}) {
        for (let keyId in products) {
            let product = products[keyId];
            this.list.push(new Product(
                keyId,
                product.name,
                product.desc,
                product.category,
                product.price,
                product.sku,
                product.stock
            ));
        }
        console.log(this.list);
    }


    addProduct (product: Product): void {
        this.list.push(product);
        this.setLastModified(product);
    }



    // retrieves a product based on its id
    getProducts (id?: string): any {
        // return this.list.filter(item => item.id === id);
        return this.list;
    }



    // returns a copy of the last modified
    // item to keep post requests small
    getLastModifiedItem () {
        return this.lastModified;
    }



    setLastModified (product: any) {
        this.lastModified = product;
    }


    log (): void {
        console.log(this.list);
    }



}
