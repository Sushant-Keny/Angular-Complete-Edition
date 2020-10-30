import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../_shared/models/recipe.model';
import { Ingredient } from '../_shared/models/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public recipeSelected = new Subject<Recipe>();
  public recipesChanged = new Subject<Recipe[]>();
  private id = 4;

  private recipes: Recipe[] = [];

  constructor(
    private readonly shoppingService: ShoppingService) { }

  getRecipes() {
   return [...this.recipes];
  }

  getRecipeIndexById(id) {
    const index = this.recipes.findIndex(e => e.id === id);
    return index;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

  getRecipeById(id: number) {
    const recipe: Recipe = this.recipes.find(e => e.id === id);
    return { ...recipe };
  }

  updateRecipeById(id: number, recipe: Recipe) {
    const i = this.getRecipeIndexById(id);

    this.recipes[i].name = recipe.name;
    this.recipes[i].tagline = recipe.tagline;
    this.recipes[i].description = recipe.description;
    this.recipes[i].imageUrl = recipe.imageUrl;
    this.recipes[i].ingredients = recipe.ingredients;

    this.recipesChanged.next([...this.recipes]);
  }

  createRecipe(recipe: Recipe): number {
    const newRecipe = new Recipe(
      this.id++,
      recipe.name,
      recipe.tagline,
      recipe.description,
      recipe.imageUrl,
      recipe.ingredients);

    this.recipes.push(newRecipe);
    this.recipesChanged.next([...this.recipes]);
    return newRecipe.id;
  }

  deleteRecipeByid(id: number) {
    const index = this.getRecipeIndexById(id);
    this.recipes.splice(index, 1);
    this.recipesChanged.next([...this.recipes]);
  }

  replaceRecipes(recipes: Recipe[]) {
    this.recipes.splice(0, recipes.length);
    this.recipes.push(...recipes);
    this.recipesChanged.next([...this.recipes]);
  }
}
