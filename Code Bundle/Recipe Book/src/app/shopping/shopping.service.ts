import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../_shared/models/ingredient.model';

@Injectable({
   providedIn: 'root'
})
export class ShoppingService {
  private ingredients: Ingredient[] = [];

  public ingredientsChanged = new Subject<Ingredient[]>();
  public editIngredient = new Subject<number>();

  constructor() {  }

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredientByIndex(index: number) {
    return { ...this.ingredients[index] };
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
    this.ingredientsChanged.next([...this.ingredients]);
  }

  editIngredientByIndex(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next([...this.ingredients]);
  }

  deleteIngredientByIndex(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next([...this.ingredients]);
  }
}
