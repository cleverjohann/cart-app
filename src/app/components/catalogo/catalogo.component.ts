import { Component, OnInit} from '@angular/core';
import { Product } from '../../models/product';
import { ProductCartComponent } from '../product-cart/product-cart.component';
import { Route, Router } from '@angular/router';
import { SharingDataService } from '../../services/sharing-data.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCartComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {

  products !: Product[];

  
  constructor (
    private productService:ProductService,
    private sharingDataService: SharingDataService){
  }
  ngOnInit(): void {
    
      this.products = this.productService.findAll();
    
  }
  
  onAddCart(product:Product){
   this.sharingDataService.productEventEmitter.emit(product);
  }

}
