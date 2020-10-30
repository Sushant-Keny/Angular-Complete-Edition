import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';

import { Ingredient } from '../../_shared/models/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  subscription: Subscription;

  constructor(private readonly shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();

    this.subscription = this.shoppingService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEdit(index: number) {
    this.shoppingService.editIngredient.next(index);
  }
}
