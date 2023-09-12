import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe-model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  FireBaseURL = 'https://recipe-book-f6c8f-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  recipeStore() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(this.FireBaseURL + 'recipes.json', recipes)
      .subscribe((response) => {
        console.log(recipes);
      });
  }

  recipeFetch() {
    return this.http.get<Recipe[]>(this.FireBaseURL + 'recipes.json').pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipe(recipes);
      })
    );
  }
}
