import {Component, OnInit} from '@angular/core';
import {Product} from './model/product';
import {DataService} from './services/data/data.service';
import {CartService} from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  products: Product[];
  originalData: any;

  constructor(private dataService: DataService, private cartService: CartService) {}

  ngOnInit() {
    this.dataService.getData().then(data => {
      // Assign data we get back from 'getData();
      this.originalData = data;
      // Copy data from 'originalData' to keep it immutable
      this.products = this.originalData.products.slice(0);
    });
  }
}
