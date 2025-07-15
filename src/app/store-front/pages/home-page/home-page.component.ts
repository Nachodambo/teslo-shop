import { rxResource } from '@angular/core/rxjs-interop';
import { Component } from '@angular/core';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
// import { ProductCardComponent } from '../../../products/components/product-card/product-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private productService: ProductsService) { }

  producsResource = rxResource({
    loader: () => this.productService.getProductList({})
})

}


