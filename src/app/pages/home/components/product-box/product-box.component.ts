import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  // Setting up the product-views
  @Input() fullWidthMode = false;
  @Input() product: Product | undefined;

  // Communicating with the child / parent component
  @Output() addToCart = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
