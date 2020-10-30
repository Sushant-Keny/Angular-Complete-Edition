import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  /* tslint:disable */
  @Output() recipeSelected = new EventEmitter<Recipe>();
  /* tslint:enable */

  recipes: Recipe[] = [
    new Recipe(
      'Ice-cream',
      'Cold frozen desert',
      '',
      'https://img.taste.com.au/a9tkfBF7/taste/2017/02/fruity-tingle-ice-cream-cones-121035-1.jpg'
    ),
    new Recipe(
      'Cake',
      'Cake is a form of sweet food',
      '',
      'https://img.taste.com.au/8-sphZa2/w643-h428-cfill-q90/taste/2018/08/smarties-chocolate-cake-139872-2.jpg'
    ),
    new Recipe(
      'Choclates',
      'There is nothing better than a friend, unless it is a friend with chocolate.',
      '',
      'https://www.seriouseats.com/2018/04/20180410-milk-chocolates-vicky-wasik-1.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
