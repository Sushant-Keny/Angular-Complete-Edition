import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { RecipeService } from './recipes.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { LoadingSpinnerService } from '../_shared/services/loading-spinner.service';
import { Recipe } from '../_shared/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesPersistenceService {

  constructor(
    private readonly http: HttpClient,
    private readonly recipesService: RecipeService,
    private readonly authService: AuthService,
    private readonly loadingSpinnerService: LoadingSpinnerService
  ) { }

  storeRecipes() {
    const recipes: Recipe[] = this.recipesService.getRecipes();

    this.http.put<Recipe[]>('https://recipe-book-e0b97.firebaseio.com/recipes.json', recipes)
      .subscribe((responseBody) => {
        this.loadingSpinnerService.load.next({ loading: false });
      });
  }

  fetchRecipes() {
    const observable: Observable<Recipe[]> = this.http.get<Recipe[]>('https://recipe-book-e0b97.firebaseio.com/recipes.json')
      .pipe(
        map((recipes: Recipe[]) => {
          return recipes.map((recipe) => {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
            return recipe;
          });
        }),
        tap((recipes: Recipe[]) => {
          this.recipesService.replaceRecipes(recipes);
        })
      );

    return observable;
  }
}
