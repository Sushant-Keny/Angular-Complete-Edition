import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { User } from '../_shared/models/user.model';
import { LoadingSpinnerService } from '../_shared/services/loading-spinner.service';
import { RecipesPersistenceService } from '../recipes/recipes-persistence.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  title = 'Recipe Book';
  userSubscription: Subscription;
  isAuthenticated = false;

  constructor(
    private readonly recipesPersistenceService: RecipesPersistenceService,
    private readonly authService: AuthService,
    private readonly loadingSpinnerService: LoadingSpinnerService
  ) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe((user: User) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onSaveRecipes() {
    this.loadingSpinnerService.load.next({ loading: true });
    this.recipesPersistenceService.storeRecipes();
  }

  onFetchRecipes() {
    this.loadingSpinnerService.load.next({ loading: true });
    this.recipesPersistenceService.fetchRecipes()
      .subscribe(() => this.loadingSpinnerService.load.next({ loading: false }));
  }

  onLogout() {
    this.authService.signOut();
  }
}
