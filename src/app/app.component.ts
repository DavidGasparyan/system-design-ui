import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "./services/product.service";
import {IProduct} from "./interfaces/product.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ui';
}
