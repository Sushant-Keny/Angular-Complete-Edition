import { Injectable } from '@angular/core';
import { Auth } from '../_shared/models/auth.model';
import { HttpClient, HttpParams, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthResponse } from '../_shared/models/auth-response.model';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../_shared/models/user.model';
import { Router } from '@angular/router';
import { LoadingSpinnerService } from '../_shared/services/loading-spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  user: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  tokenExpiryTimer: any;

  constructor(
    private readonly http: HttpClient,
    private readonly loadingSpinnerService: LoadingSpinnerService,
    private readonly router: Router
  ) { }

  signUp(auth: Auth): Observable<AuthResponse> {
    const observable: Observable<AuthResponse> = this.http
      .post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signUp', {
        ...auth,
        returnSecureToken: true
      }, {
        params: new HttpParams().set('key', 'AIzaSyBwCD6_8SkT_pX84vwRSgM5SqDWeUQuiIo')
      })
      .pipe(
        catchError(this.handleError),
        tap((response: AuthResponse) => {
          this.handleAuthentication(
            response.localId,
            response.email,
            response.idToken,
            +response.expiresIn
          );
        })
      );

    return observable;
  }

  signIn(auth: Auth): Observable<AuthResponse> {
    const observable: Observable<AuthResponse> = this.http
      .post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword', {
        ...auth,
        returnSecureToken: true
      }, {
        params: new HttpParams().set('key', 'AIzaSyBwCD6_8SkT_pX84vwRSgM5SqDWeUQuiIo')
      })
      .pipe(
        catchError(this.handleError),
        tap((response: AuthResponse) => {
          this.handleAuthentication(
            response.localId,
            response.email,
            response.idToken,
            +response.expiresIn
          );
        })
      );

    return observable;
  }

  signOut() {
    localStorage.removeItem('userData');
    this.user.next(null);
    clearTimeout(this.tokenExpiryTimer);
    this.tokenExpiryTimer = null;
    this.loadingSpinnerService.load.next({ loading: true });
    setTimeout(() => {
      this.loadingSpinnerService.load.next({ loading: false });
      this.router.navigate(['/auth']);
    }, 500);
  }

  autoLogin() {
    const userData: {
      id: string,
      email: string,
      idToken: string,
      tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));

    if (!userData) {
      return this.router.navigate(['/auth']);
    }

    const user = new User(userData.id, userData.email, userData.idToken, new Date(userData.tokenExpirationDate));

    if (user.token) {
      this.user.next(user);
      const expiresIn = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expiresIn);
    }
  }

  autoLogout(expiresIn: number) {
    this.tokenExpiryTimer = setTimeout(() => {
      this.signOut();
    }, expiresIn);
  }

  private handleAuthentication(id: string, email: string, token: string, expiresIn: number) {
    const tokenExpirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(id, email, token, tokenExpirationDate);
    this.user.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
    this.autoLogout(expiresIn * 1000);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';

    if (!(error?.error?.error?.message)) {
      return throwError('An Error Occured');
    }

    switch (error?.error?.error?.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break;

      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Too many attempts! Please try again later';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'The password is not correct';
        break;

      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email is not registered';
        break;

      case 'USER_DISABLED':
        errorMessage = 'User is disabled. Please contact Administrator';
        break;

      case 'TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts. Please try again later.':
        errorMessage = 'Too many unsuccessful login attempts. Please try again later';
        break;

      default:
        errorMessage = 'An Error Occured!';
        break;
    }

    return throwError(errorMessage);
  }
}
