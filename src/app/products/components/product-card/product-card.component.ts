import { SlicePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '@products/interfaces/product.interface';
import { ProductImagePipe } from '@products/pipes/productImage.pipe';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [SlicePipe,RouterLink,ProductImagePipe],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  @Input() product?: IProduct
}
