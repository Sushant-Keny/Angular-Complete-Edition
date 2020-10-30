import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';

import { Ingredient } from '../../_shared/models/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingEdit', { static: false }) shoppingEditForm: NgForm;
  subscription: Subscription;
  editIngredientIndex: number;
  editIngredient: Ingredient;
  editMode = false;

  constructor(private readonly shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingService.editIngredient.subscribe((index) => {
      this.editIngredientIndex = index;
      this.editMode = true;
      this.editIngredient = this.shoppingService.getIngredientByIndex(index);

      this.shoppingEditForm.setValue({
        name: this.editIngredient.name,
        amount: this.editIngredient.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddIngredient() {
    const {
      name,
      amount
    } = this.shoppingEditForm.value;

    const ingredient: Ingredient = new Ingredient(name, amount);

    if (this.editMode) {
      this.shoppingService.editIngredientByIndex(this.editIngredientIndex, ingredient);
      this.editMode = false;
    } else {
      this.shoppingService.addIngredient(ingredient);
    }

    this.shoppingEditForm.reset();
  }

  onClear() {
    this.editMode = false;
    this.shoppingEditForm.reset();
  }

  onDelete() {
    this.shoppingService.deleteIngredientByIndex(this.editIngredientIndex);
    this.onClear();
  }

}
