import {Subject} from 'rxjs';

export class ProductService {

    private products = ['A Book'];
    productsUpdated = new Subject();

    addProducts(productName : string) {
        this.products.push(productName);
        this.productsUpdated.next();
    }

    getProducts() {
        return [...this.products]
    }

    deleteProduct(productName) {
        this.products = this.products.filter(p => p!= productName)
        this.productsUpdated.next();
    }

}