import { Ingredient } from './ingredient.model';

export class Recipe {
  constructor(
    public id: number,
    public name: string,
    public tagline: string,
    public description: string,
    public imageUrl: string,
    public ingredients: Ingredient[]
  ) {}
}
