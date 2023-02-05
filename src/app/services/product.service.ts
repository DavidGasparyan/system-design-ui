import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {IProduct} from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products$ = new BehaviorSubject<IProduct[]>([] as IProduct[]);
  constructor(
    private readonly _http: HttpClient,
  ) {}

  get(id: number) {
    return this._http
      .get<IProduct>(`/api/product/${id}`)
      .pipe()
      .subscribe(product => this._products$.next([product]));
  }

  getAll() {
    return this._http
      .get<IProduct[]>(`/api/products`)
      .pipe()
      .subscribe(products => this._products$.next(products));
  }

  create(product: IProduct) {
    return this._http.post<IProduct>(`/api/product`, product)
      .pipe()
      .subscribe(product => this._products$.next([product]))
  }

  createMultiple(products: IProduct[]) {
    return this._http.post<IProduct[]>(`/api/product`, products)
      .pipe()
      .subscribe(products => this._products$.next(products))
  }

  get products$() {
    return this._products$.asObservable();
  }
}
