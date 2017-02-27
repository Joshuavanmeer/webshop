export class Product {

    constructor(
        public id: string,
        private name: string,
        private imgSrc: string,
        private desc: string,
        private category: string,
        private price: number,
        private sku: string,
        private stock: number,
        public recordId?: string
    ) {}



    setRecordId (id: string): void {
        this.recordId = id;
    }


    getPrice(): number {
        return this.price;
    }

}
