import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onAddToCart() {
    this.cartService.addToCart(this.product);
  }

}
