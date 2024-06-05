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
// Suggested code may be subject to a license. Learn more: ~LicenseLog:75641518.
    this.productEventEmitter.emit(product);
  }
}
