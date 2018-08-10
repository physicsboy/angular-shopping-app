import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  @Input() products: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
