import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Ingredient } from '../../_shared/models/ingredient.model';
import { RecipeService } from '../recipes.service';
import { Recipe } from '../../_shared/models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: number;
  paramsSubscription: Subscription;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      this.id = params['id'] && +params['id'];
      this.editMode = this.id !== undefined;
    });

    this.initForm();
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  private initForm() {
    let recipeName = '';
    let recipeTagline = '';
    let recipeDescription = '';
    let recipeImageUrl = '';
    const recipeIngredients: FormGroup[] = [];

    if (this.editMode) {
      const recipe: Recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeTagline = recipe.tagline;
      recipeDescription = recipe.description;
      recipeImageUrl = recipe.imageUrl;

      if (recipe.ingredients.length) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(new FormGroup({
            name: new FormControl(ingredient.name, Validators.required),
            amount: new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      tagline: new FormControl(recipeTagline, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imageUrl: new FormControl(
        recipeImageUrl,
        [
          Validators.required,
          Validators.pattern(
            /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
          )
        ]
      ),
      ingredients: new FormArray(recipeIngredients)
    });
  }

  onAddRecipe() {
    if (this.editMode) {
      this.recipeService.updateRecipeById(this.id, this.recipeForm.value);
      return this.router.navigate(['../'], { relativeTo: this.route });
    }

    this.id = this.recipeService.createRecipe(this.recipeForm.value);
    return this.router.navigate(['../', this.id], { relativeTo: this.route });
  }

  onAddIngredient() {
    const name = new FormControl('', Validators.required);
    const amount = new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]);

    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name, amount
      })
    );
  }

  get ingredientControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onClear() {
    this.recipeForm.reset();
  }

  onCancelEdit() {
    this.router.navigate(['../']);
  }

  onDeleteIngredient(index: number) {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  onDeleteAllIngredients() {
    (this.recipeForm.get('ingredients') as FormArray).clear();
  }

}
