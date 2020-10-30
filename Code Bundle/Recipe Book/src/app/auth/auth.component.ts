import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auth } from '../_shared/models/auth.model';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { AuthResponse } from '../_shared/models/auth-response.model';
import { LoadingSpinnerService } from '../_shared/services/loading-spinner.service';
import { AlertComponent } from '../alert/alert.component';
import { PlaceHolderDirective } from '../_shared/directives/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  @ViewChild('authForm', { static: false }) authForm: NgForm;
  @ViewChild(PlaceHolderDirective, { static: false }) alertHost: PlaceHolderDirective;

  isLoginMode = true;
  error: string = null;
  subscription: Subscription;

  constructor(
    private readonly authService: AuthService,
    private readonly loadingSpinnerService: LoadingSpinnerService,
    private readonly router: Router,
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (!!this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(auth: Auth) {
    this.error = null;
    this.loadingSpinnerService.load.next({ loading: true });

    if (this.authForm.invalid) {
      return;
    }

    let observable: Observable<AuthResponse>;

    if (!this.isLoginMode) {
      observable = this.authService.signUp(auth);
    } else {
      observable = this.authService.signIn(auth);
    }

    observable.subscribe(
      (response: AuthResponse) => {
        this.authForm.reset();
        this.router.navigate(['/recipes']);
      },
      (error: string) => {
        this.loadingSpinnerService.load.next({ loading: false });
        this.error = error;
        this.showError(error);
      }
    );
  }

  onCloseModal() {
    this.error = null;
  }

  private showError(message: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    this.alertHost.viewContainerRef.clear();
    const component = this.alertHost.viewContainerRef.createComponent(alertComponentFactory);
    component.instance.message = message;

    this.subscription = component.instance.close.subscribe(() => {
      this.alertHost.viewContainerRef.clear();
      this.subscription.unsubscribe();
    });
  }

}
