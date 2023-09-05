import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient-model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  onAddItem() {
    const iName = this.nameInputRef.nativeElement.value;
    const iAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(iName, iAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

  onDeleteItem() {
    const removeIngredient = this.shoppingListService.getIngredients();
    this.shoppingListService.deleteIngredient(removeIngredient);
  }

  onClear() {
    const clearIngredients = this.shoppingListService.getIngredients();
    this.shoppingListService.clearIngredients(clearIngredients);
  }

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {

  }
}
