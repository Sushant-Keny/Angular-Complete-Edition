import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Recipe } from '../../_shared/models/recipe.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  paramsSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipeById(+this.route.snapshot.params['id']);

    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipeById(+params['id']);
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.router.navigate(['/shopping']);
  }

  onDeleteRecipe(id: number) {
    const confirmed = confirm('Do you really want to delete the recipe?');

    if (confirmed) {
      this.recipeService.deleteRecipeByid(id);
      this.router.navigate(['/']);
    }
  }

}
