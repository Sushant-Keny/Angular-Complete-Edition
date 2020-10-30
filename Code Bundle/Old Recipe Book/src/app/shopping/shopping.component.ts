import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../_shared/models/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  ingredient: Ingredient;
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredient = ingredient;
  }

}
