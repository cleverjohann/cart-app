import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3608966634.
  @Input() items : CartItem[] =[];
  @Input() total=0;

  @Output() idProduct= new EventEmitter();
  onDeleteCart(id:number){
    this.idProduct.emit(id);
  }
  
}
