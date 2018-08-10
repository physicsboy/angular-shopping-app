import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {

  @Input() product: Product;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onAddToCart() {
    this.cartService.addToCart(this.product);
  }

  //TODO: Add routing for clicking thumbnail and open product page
  onProductClick() {

  }

}
