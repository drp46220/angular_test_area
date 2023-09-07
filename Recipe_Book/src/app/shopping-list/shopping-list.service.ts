// import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { Subject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {
  ingredientChanged = new Subject<Ingredient[]>();
  startEdit = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatos', 23),
    new Ingredient('pears', 7),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(i: number) {
    return this.ingredients[i];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  updateIngredient(NewIngredient: Ingredient, index: number) {
    this.ingredients[index] = NewIngredient;
    this.ingredientChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next(this.ingredients.slice());
  }

  constructor() {}
}
