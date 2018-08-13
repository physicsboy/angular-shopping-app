import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductPageComponent} from '../product-page/product-page.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.css']
})
export class ProductThumbnailComponent implements OnInit {

  @Input() product: Product;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openPopup(prod) {
    this.dialog.open(ProductPageComponent, {
      autoFocus: true,
      width: '600px',
      data: prod.product
    });

  }

}
