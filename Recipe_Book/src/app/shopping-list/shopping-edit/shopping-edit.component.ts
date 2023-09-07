import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedIng: Ingredient;
  @ViewChild('f', { static: false }) shoppingForm: NgForm;

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        newIngredient,
        this.editItemIndex
      );
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDeleteItem() {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.editMode = false;
    this.onClear();
    // const removeIngredient = this.shoppingListService.getIngredients();
    // this.shoppingListService.deleteIngredient(removeIngredient);
  }

  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startEdit.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editedIng = this.shoppingListService.getIngredient(index);
        this.shoppingForm.setValue({
          name: this.editedIng.name,
          amount: this.editedIng.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
