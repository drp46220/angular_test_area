import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('test recipe', 'test description', 'https://www.jocooks.com/wp-content/uploads/2022/07/grilled-chicken-breast-1-20.jpg'),
    new Recipe('test recipe1', 'test description1', 'https://www.jocooks.com/wp-content/uploads/2022/07/grilled-chicken-breast-1-20.jpg'),
    new Recipe('test recipe2', 'test description2', 'https://www.jocooks.com/wp-content/uploads/2022/07/grilled-chicken-breast-1-20.jpg'),
    new Recipe('test recipe3', 'test description3', 'https://www.jocooks.com/wp-content/uploads/2022/07/grilled-chicken-breast-1-20.jpg'),
  ]

  onRecipeSeleted(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

