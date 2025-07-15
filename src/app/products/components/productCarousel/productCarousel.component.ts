import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductImagePipe } from "../../pipes/productImage.pipe";


@Component({
  selector: 'product-carousel',
  imports: [ProductImagePipe],
  templateUrl: './productCarousel.component.html',
  styles: [`
  .swiper {
    width: 100%;
    height: 500px;
  }
`]
})
export class ProductCarouselComponent implements AfterViewInit {

  images = input.required<string[]>();

  divSwiper = viewChild.required<ElementRef>("divSwiper");

  ngAfterViewInit(): void {
    const element = this.divSwiper().nativeElement;
    if (!element) return;

    const swiper = new Swiper(element, {

      direction: 'vertical',
      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },

      modules: [Navigation, Pagination],

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
