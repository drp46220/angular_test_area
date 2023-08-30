import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatos', 23),
    new Ingredient('pears', 7),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  deleteIngredient(ingredient: Ingredient[]) {
    this.ingredients.pop();
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  constructor() { }
}
