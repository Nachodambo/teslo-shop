import { ChangeDetectionStrategy, Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '@products/services/products.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent {

  // public idSlug = computed(() => {
  //   const slugIndex = this.router.url.split('/').length - 1
  //   return this.router.url.split('/')[slugIndex]
  // });
  // private router = inject(Router);

  private activatRoute = inject(ActivatedRoute);
  private productService = inject(ProductsService);
  public idSlug = this.activatRoute.snapshot.params['idSlug'];

  productResource = rxResource({
    request: () => ({ idSlug: this.idSlug }),
    loader: ({ request }) => this.productService.getProductByIdSlug(request.idSlug),
  })


}
