import { Component, OnInit } from '@angular/core';

import { Recipe } from '../_shared/models/recipe.model';
import { RecipeService } from './recipes.service';
import { LoadingSpinnerService } from '../_shared/services/loading-spinner.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(
    private readonly recipeService: RecipeService,
    private readonly loadingSpinnerService: LoadingSpinnerService
  ) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });

    this.loadingSpinnerService.load.next({ loading: false });
  }

}
