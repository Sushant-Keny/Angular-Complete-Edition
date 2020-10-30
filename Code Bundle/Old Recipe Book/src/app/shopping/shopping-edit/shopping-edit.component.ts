import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../_shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;

  /* tslint:disable */
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  /* tslint:enable */

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const ingredient: Ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );

    this.ingredientAdded.emit(ingredient);
  }

}
