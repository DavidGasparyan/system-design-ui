import {Component, OnInit} from '@angular/core';
import {IProduct} from "../interfaces/product.interface";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = [];
  responsiveOptions;
  constructor(
    private readonly _productService: ProductService
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this._productService.getAll();
    this._productService.products$
      .subscribe((products) => this.products = products);
  }
}
