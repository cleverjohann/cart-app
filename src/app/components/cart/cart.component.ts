import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../../models/cartItem';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnChanges {
  
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3608966634.
  @Input() items : CartItem[] =[];
  total=0;
  ngOnChanges(changes: SimpleChanges): void {
    let itemsChanges = changes['items'];
    this.calculateTotal();
    this.saveSession();

    
  }

  @Output() idProduct= new EventEmitter();
  onDeleteCart(id:number){
    this.idProduct.emit(id);
  }
  
  calculateTotal():void{
    this.total = this.items.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }
  saveSession():void{
    sessionStorage.setItem('cart',JSON.stringify(this.items));
  }
}
