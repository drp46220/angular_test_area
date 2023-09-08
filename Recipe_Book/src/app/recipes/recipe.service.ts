import { Injectable } from '@angular/core';
import { Recipe } from './recipe-model';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  // recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'test description',
      'https://www.jocooks.com/wp-content/uploads/2022/07/grilled-chicken-breast-1-20.jpg',
      [new Ingredient('test', 1)]
    ),
    new Recipe(
      'burger',
      'american meal',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEYb3dHVXt1lAhZ4-e_h5l3207hHDUTV8bAQ&usqp=CAU',
      [new Ingredient('patty', 2), new Ingredient('buns', 4)]
    ),
    new Recipe(
      'chicken',
      'classic lunch ',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdoeN9jFpSoXAqU8r5Piy-Yzfa9eeeJPjA7w&usqp=CAU',
      [new Ingredient('chicken', 2), new Ingredient('lemmon', 1)]
    ),
    new Recipe(
      'noodles',
      'fine dining',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVQNJ4XZM4ZVS0E5KSesP-wWMVyq4XbOz37TPzppS0vRBV698CL39V3T8v1TpqFrXGjk&usqp=CAU',
      [new Ingredient('noodles', 2), new Ingredient('soy sauce', 1)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(newRecipe: Recipe, index: number) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  constructor(private shoppingListService: ShoppingListService) {}
}
