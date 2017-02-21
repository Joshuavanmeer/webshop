import { Product } from './product';

export abstract class AbstractList {


    // holds a list of products
    private list: Product[] = [];
    private lastModified: Product
    private totalPrice: number[] = [];
    private totalItems: number[] = [0];


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
        this.calulateTotalPrice();
        this.calculateTotalItems();
    }


    addProduct (product: Product): void {
        this.list.push(product);
        this.setLastModified(product);
        this.calulateTotalPrice();
    }



    // retrieves a product based on its id
    getProducts (id?: string): any {
        return this.list;
    }


    getTotalPrice (): number[] {
        return this.totalPrice;
    }


    getTotalItems (): number[] {
        return this.totalItems;
    }


    // returns a copy of the last modified
    // item to keep post requests small
    getLastModifiedItem () {
        return this.lastModified;
    }



    setLastModified (product: any) {
        this.lastModified = product;
    }


    calulateTotalPrice (): void {
        let total = 0;
        this.list.forEach( item => {
            total += item.getPrice();
        });
        this.totalPrice[0] = total;
    }


    calculateTotalItems (): void {
        this.totalItems[0] = this.list.length;
    }


    log (): void {
        console.log(this.list);
    }



}
