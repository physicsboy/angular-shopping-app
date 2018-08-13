import {Component, Inject, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {CartService} from '../../services/cart/cart.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private cartService: CartService,
    @Inject(MAT_DIALOG_DATA) private data: Product
  ) { }

  ngOnInit() {
  }

  onAddToCart(product) {
    this.cartService.addToCart(product);
    console.log(product);
  }

}
