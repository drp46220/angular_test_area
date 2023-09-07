import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient-model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppinglistService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.igChangeSub = this.shoppinglistService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(i: number) {
    this.shoppinglistService.startEdit.next(i);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
