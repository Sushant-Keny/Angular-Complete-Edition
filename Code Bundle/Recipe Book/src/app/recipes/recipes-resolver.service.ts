import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Recipe } from '../_shared/models/recipe.model';
import { RecipeService } from './recipes.service';
import { RecipesPersistenceService } from './recipes-persistence.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private readonly recipesPersistenceService: RecipesPersistenceService,
    private readonly recipesService: RecipeService
  ) {  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (!this.recipesService.getRecipes().length) {
      return this.recipesPersistenceService.fetchRecipes();
    }
  }
}
