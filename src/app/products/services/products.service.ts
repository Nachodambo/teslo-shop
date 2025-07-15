import { HttpClient, HttpParams } from '@angular/common/http';
import { assertNotInReactiveContext, Injectable } from '@angular/core';
import { IProduct, IProductResponse } from '@products/interfaces/product.interface';
import { BehaviorSubject, Observable, of, pipe, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';

interface Option {
  limit?: number,
  offset?: number,
  gender?: string,
}

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  getProductList(option: Option): Observable<IProductResponse> {
    const { limit = 9, offset = 0, gender = "" } = option;
    return this.http.get<IProductResponse>(`${baseUrl}/products`, {
      params: {
        limit,
        offset,
        gender
      }
    })
      .pipe(
        tap((response) => {
          console.log(response)
        })
      )
  }

  getProductByIdSlug(idSlug: string): Observable<IProduct|null> {

    if(!idSlug) return throwError(() => new Error('idSlug is required'));

    return this.http.get<IProduct>(`${baseUrl}/products/${idSlug}`)
  };
}
