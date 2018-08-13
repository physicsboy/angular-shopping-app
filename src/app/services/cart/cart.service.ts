import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products: any[];
  cartTotal: number;
  numCart: number;

  constructor() {
    this.products = [];
    this.cartTotal = 0;
    this.numCart = 0;
  }

  addToCart(product) {
    let alreadyExists = false;
    const parsedPrice = parseFloat(product.price);
    this.cartTotal += parsedPrice;
    this.numCart++;

    // Search product in cart and increment quantity
    this.products = this.products.map(prod => {
      if (prod.product.id === product.id) {
        prod.quantity++;
        alreadyExists = true;
      }
      return prod;
    });
    // Add new product if doesn't already exist
    if (!alreadyExists) {
      product.parsePrice = parsedPrice;
      this.products.push({
        product: product,
        quantity: 1
      });
    }
  }

  deleteFromCart(product) {
    this.products = this.products.filter(prod => {
      if (prod.product.id === product.id) {
        this.cartTotal -= prod.product.parsedPrice * prod.quantity;
      }
    });
  }

  flushCart() {
    this.products = [];
    this.cartTotal = 0;
  }

  getCartNum() {
    return this.numCart;
  }
}
