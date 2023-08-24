import { Component } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  recipes: Recipe [] = [
    new Recipe('test recipe', 'test description', 'https://www.jocooks.com/wp-content/uploads/2022/07/grilled-chicken-breast-1-20.jpg'),
    new Recipe('test recipe', 'test description', 'https://www.jocooks.com/wp-content/uploads/2022/07/grilled-chicken-breast-1-20.jpg'),
    new Recipe('test recipe', 'test description', 'https://www.jocooks.com/wp-content/uploads/2022/07/grilled-chicken-breast-1-20.jpg'),
    new Recipe('test recipe', 'test description', 'https://www.jocooks.com/wp-content/uploads/2022/07/grilled-chicken-breast-1-20.jpg'),
  ]

}

