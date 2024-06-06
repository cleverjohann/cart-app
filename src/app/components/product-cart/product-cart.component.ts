import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
  @Input () product!: Product;

  @Output() productEventEmitter : EventEmitter<Product> = new EventEmitter();
  
  onAddCart(product:Product){
    this.productEventEmitter.emit(product);
  }
}
