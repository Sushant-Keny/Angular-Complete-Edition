import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../../_shared/models/recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  recipesChangedSubscription: Subscription;

  constructor(private readonly recipeService: RecipeService) {  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

    this.recipesChangedSubscription = this.recipeService.recipesChanged.subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.recipesChangedSubscription.unsubscribe();
  }

}
