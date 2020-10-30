import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is on its way');

    const modifiedRequest: HttpRequest<any> = req.clone({
      headers: req.headers.append('API-Key', 'xyz')
    });

    return next.handle(modifiedRequest);
  }
}
