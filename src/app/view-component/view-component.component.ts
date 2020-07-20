import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  @Input() product: string;
  // @Output() productBoxClicked = new EventEmitter();
 
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  onClicked() {
    // this.productBoxClicked.emit();
    this.productService.deleteProduct(this.product);
  }

  

}
