import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


import { FoodproductService } from './Services/foodproduct.service';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

  constructor(private product:FoodproductService) {}

  intercept(request: HttpRequest<unknown>, handler:HttpHandler) {
    const modifiedRequest = request.clone({
      headers:request.headers.append(
        'Authorization',
        `Bearer ${this.product.getToken()}`

      )
    })
    return handler.handle(modifiedRequest);
  }
}
