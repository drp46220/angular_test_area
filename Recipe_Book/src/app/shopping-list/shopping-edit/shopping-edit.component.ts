import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as shoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducer';

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
      // this.shoppingListService.updateIngredient(
      //   newIngredient,
      //   this.editItemIndex
      // );
      this.store.dispatch(
        new shoppingListActions.UpdateIngredient({
          index: this.editItemIndex,
          ingredient: newIngredient,
        })
      );
    } else {
      // this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(new shoppingListActions.AddIngredient(newIngredient));
    }
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDeleteItem() {
    // this.shoppingListService.deleteIngredient(this.editItemIndex);
    // this.editMode = false;
    this.store.dispatch(
      new shoppingListActions.DeleteIngredient(this.editItemIndex)
    );
    this.onClear();
  }

  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;

    this.store.dispatch(new shoppingListActions.StopEdit());
  }

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.subscription = this.store
      .select('shoppingList')
      .subscribe((stateData) => {
        if (stateData.editingsIndex > -1) {
          this.editMode = true;
          this.editedIng = stateData.editIngs;
          this.editItemIndex = stateData.editingsIndex; // pulls from old data and updates
          this.shoppingForm.setValue({
            name: this.editedIng.name,
            amount: this.editedIng.amount,
          });
        } else {
          this.editMode = false;
        }
      });
    // this.subscription = this.shoppingListService.startEdit.subscribe(
    //   (index: number) => {
    //     this.editMode = true;
    //     this.editItemIndex = index;
    //     this.editedIng = this.shoppingListService.getIngredient(index); // old state
    //     this.shoppingForm.setValue({
    //       name: this.editedIng.name,
    //       amount: this.editedIng.amount,
    //     });
    //   }
    // );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.store.dispatch(new shoppingListActions.StopEdit());
  }
}
