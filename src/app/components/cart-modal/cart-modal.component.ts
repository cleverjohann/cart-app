import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart-modal',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './cart-modal.component.html',
  styleUrl: './cart-modal.component.css'
})
export class CartModalComponent {
  @Input() items : CartItem[] =[];
  @Input() total=0;

  @Output() idProduct= new EventEmitter();
  onDeleteCart(id:number){
    this.idProduct.emit(id);
  }
  @Output () OpenEvernEmitter = new EventEmitter();
  openCart():void{
    this.OpenEvernEmitter.emit();
  }
}
