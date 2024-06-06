import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  private _idProductEvenEmitter : EventEmitter<number>= new EventEmitter();
  private _productEventEmitter: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }
  get idProductEvenEmitter():EventEmitter<number>{
    return this._idProductEvenEmitter;
  }
  get productEventEmitter():EventEmitter<Product>{
    return this._productEventEmitter;
  }
}
