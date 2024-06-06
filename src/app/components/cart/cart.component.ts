import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  {
  
  items : CartItem[] =[];
  total=0

  idProduct= new EventEmitter();
  constructor (private sharingDataService:SharingDataService ,private router: Router){
    this.items = this.router.getCurrentNavigation()?.extras.state!['items'];
    this.total = this.router.getCurrentNavigation()?.extras.state!['total'];
  }
  onDeleteCart(id:number){
    this.sharingDataService.idProductEvenEmitter.emit(id);
  }
}
