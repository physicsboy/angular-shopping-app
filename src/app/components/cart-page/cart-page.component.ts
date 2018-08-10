import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  products: any[];
  numProducts: number;
  cartTotal: number;

  constructor(private cartService: CartService) {
    this.products = [];
    this.numProducts = 0;
    this.cartTotal = 0;
  }

  ngOnInit() {
  }

  deleteProduct(product: Product) {
    this.cartService.deleteFromCart(product);
  }

  onCheckout() {
    // TODO: Checkout...
  }
}
