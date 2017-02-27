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
                product.id,
                product.name,
                product.imgSrc,
                product.desc,
                product.category,
                product.price,
                product.sku,
                product.stock,
                keyId
            ));
        }
        this.calculateTotalPrice();
        this.calculateTotalItems();
    }


    addProduct (product: Product): void {
        this.list.push(product);
        this.setLastModified(product);
        this.calculateTotalPrice();
        this.calculateTotalItems();
    }



    removeProduct(productId: string): void {
        let index = this.list.findIndex( item => item.id === productId);
        this.lastModified = this.list.splice(index, 1)[0];
        this.calculateTotalPrice();
        this.calculateTotalItems();
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



    getRecordId (id: string): string {
        let index = this.list.findIndex( item => item.id === id);
        return this.list[index].recordId;
    }


    productOnList(id: string): boolean {
        let onList = false;
        this.list.forEach( item => {
            if (item.id === id) {
                onList = true;
            }
        })
        return onList;
    }


    // returns a copy of the last modified
    // item to keep post requests small
    getLastModifiedItem () {
        return this.lastModified;
    }



    setLastModified (product: any) {
        this.lastModified = product;
    }


    calculateTotalPrice (): void {
        let total = 0;
        this.list.forEach( item => {
            total += item.getPrice();
        });
        this.totalPrice[0] = Number(total.toFixed(2));
    }


    calculateTotalItems (): void {
        this.totalItems[0] = this.list.length;
    }


    log (): void {
        console.log(this.list);
    }



}
