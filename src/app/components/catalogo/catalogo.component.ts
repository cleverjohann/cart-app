import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCartComponent } from '../product-cart/product-cart.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  @Input () products!:Product[];

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter<Product>();
  onAddCart(product:Product){
// Suggested code may be subject to a license. Learn more: ~LicenseLog:90695713.
   this.productEventEmitter.emit(product);
  }

}
