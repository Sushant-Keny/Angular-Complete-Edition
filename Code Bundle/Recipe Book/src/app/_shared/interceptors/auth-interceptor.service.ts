import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, exhaustMap } from 'rxjs/operators';

import { AuthService } from '../../auth/auth.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  guardFreeUrls: string[] = [
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword'
  ];

  constructor(private readonly authService: AuthService) {  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const observable: Observable<HttpEvent<any>> = this.authService.user.pipe(
      take(1),
      exhaustMap((user: User) => {
        if (this.guardFreeUrls.includes(req.url)) {
          return next.handle(req);
        }
        const modifiedRequest = req.clone({
          params: new HttpParams().set('auth', user.token)
        });

        return next.handle(modifiedRequest);
      })
    );
    return observable;
  }

}
