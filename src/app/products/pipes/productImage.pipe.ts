import { Pipe, type PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.development';


const noImage = 'assets/images/no-image.jpg';
const baseUrl = environment.baseUrl;

@Pipe({
  name: 'ProductImagePipe',
  standalone: true,
})
export class ProductImagePipe implements PipeTransform {
  transform(value: string | string[]):string {

    if (typeof value === 'string') return `${baseUrl}/files/product/${value}`;

    const image = value[0];

    if(!image) return noImage;

    return `${baseUrl}/files/product/${image}`;

  }
}
