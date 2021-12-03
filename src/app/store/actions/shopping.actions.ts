import {Action} from '@ngrx/store';
import {ShoppingItem} from './../models/shopping-item.model';

export enum ShoppingActionTypes{
  ADD_ITEM = '[SHOPPING] Add item',
  ADD_ITEM_SUCCESS = '[SHOPPING] Add item Success',
  ADD_ITEM_FAILURE = '[SHOPPING] Add item Failure',
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}

export type ShoppingAction = AddItemAction;
