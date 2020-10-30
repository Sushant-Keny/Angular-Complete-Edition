import { Component, OnInit, Input, EventEmitter, DoCheck, OnChanges } from '@angular/core';
import { Ingredient } from '../../_shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnChanges {
  /* tslint:disable */
  @Input() ingredient: Ingredient;
  /* tslint:enable */

  ingredients: Ingredient[] = [
    new Ingredient('Milk', 2),
    new Ingredient('Chocolate', 10),
    new Ingredient('Sugar', 1),
    new Ingredient('Food Color', 5),
    new Ingredient('Baking Powder', 1)
  ];

  constructor() { }
  ngOnChanges(): void {
    if (this.ingredient) {
      this.ingredients.push({ ...this.ingredient });
    }
    this.ingredient = null;
  }

  ngOnInit(): void {
  }

}
