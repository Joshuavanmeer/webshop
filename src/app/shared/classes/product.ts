export class Product {

    constructor(
        public id: string,
        private name: string,
        private desc: string,
        private category: string,
        private price: number,
        private sku: string,
        private stock: number
    ) {}

}
