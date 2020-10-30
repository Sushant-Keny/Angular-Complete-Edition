import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../../_shared/models/recipe.model';
import { Observable } from 'rxjs';

import { RecipeService } from '../recipes.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeDetailsResolver implements Resolve<Recipe> {
  constructor(private recipeService: RecipeService) {  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.recipeService.getRecipeById(+route.params['id']);
  }
}
