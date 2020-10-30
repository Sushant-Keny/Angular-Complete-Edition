import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../../_shared/models/recipe.model';
import { RecipeService } from '../../recipes.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private readonly recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
