import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

import {ProductService} from './product.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productName = "A book";
  isDisabled = true;
  productList = [];
  private productSubscription: Subscription;

  constructor(private productsService: ProductService) {
    setTimeout(() => {
      this.isDisabled = false;
      }, 3000);
   }

  ngOnInit(): void {
    this.productList = this.productsService.getProducts();
    this.productSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.productList = this.productsService.getProducts();
    });
  }

  ngOnDestry() {
    this.productSubscription.unsubscribe();
  }

  addProduct(form) {
    // this.productList.push(this.productName)
    console.log(form.value)
    if(form.valid) {
      // this.productList.push(form.value.productName);
      this.productsService.addProducts(form.value.productName);
    }
  }

  onRemoveProduct(product: string){
    // this.productList = this.productList.filter(p => p!= product)
    this.productsService.deleteProduct(product);
  }
}
