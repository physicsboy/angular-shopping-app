import {Component, Inject, Input, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  @Input() products: any [];

  constructor(
    private cartService: CartService,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
  }

}
