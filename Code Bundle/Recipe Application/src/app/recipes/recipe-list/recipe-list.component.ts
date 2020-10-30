import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Ice-cream',
      description: 'Sweet frozen dessert',
      imageUrl: 'https://www.dairyfoods.com/ext/resources/DF/2019/November/ice-cream/dfx1119-IceCream-open.jpg',
    },
    {
      name: 'Cake',
      description: 'Cake is a form of sweet food',
      imageUrl: 'https://img.taste.com.au/FjWf4QXU/w643-h428-cfill-q90/taste/2019/08/swiss-meringue-buttercream-152901-1.jpg',
    },
    {
      name: 'Pizza',
      description: 'Everyone\'s favourite',
      imageUrl: 'https://media.dominos.ua/menu/product_osg_image_category/2019/10/03/%D0%A2%D0%B5%D1%85%D0%B0%D1%81_300dpi-min.jpg',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
