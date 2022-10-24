import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  // Setting up the product-views
  @Input() fullWidthMode = false;
  constructor() { }

  ngOnInit(): void {
  }

}
