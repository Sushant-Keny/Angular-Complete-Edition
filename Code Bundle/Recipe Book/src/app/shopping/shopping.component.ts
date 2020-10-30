import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../_shared/models/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  constructor(private readonly shoppingService: ShoppingService) {  }

  ngOnInit(): void {

  }
}
