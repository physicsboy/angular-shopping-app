import {Component, OnInit} from '@angular/core';
import {Product} from './model/product';
import {DataService} from './services/data/data.service';
import {CartService} from './services/cart/cart.service';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {MatDialog} from '@angular/material';
import {CartPageComponent} from './components/cart-page/cart-page.component';
import {ExampleComponent} from './components/example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[];
  originalData: any;
  numCart: number;

  constructor(
    private dataService: DataService,
    private cartService: CartService,
    public dialog: MatDialog) {}

  ngOnInit() {
    this.dataService.getData().then(data => {
      // Assign data we get back from 'getData();
      this.originalData = data;
      // Copy data from 'originalData' to keep it immutable
      this.products = this.originalData.products.slice(0);
    });
  }

  getCartNum() {
    this.numCart = this.cartService.getCartNum();
  }

  exampleDialog(prods) {
    this.dialog.open(ExampleComponent, {
      width: '600px',
      data: prods
    });
  }

  openCartDialog(prods) {
    console.log(prods);
    this.dialog.open(CartPageComponent, {
      autoFocus: true,
      width: '600px',
      data: prods
    });
  }

}
