import { CHANGE_WORKSHEET_TITLE, ADD_BUDGET_ITEM } from './actionTypes';

export const changeWorksheetTitle = title => ({
  type: CHANGE_WORKSHEET_TITLE,
  title,
});

export const addBudgetItem = (name, amount, isExpense) => ({
  type: ADD_BUDGET_ITEM,
  name,
  amount,
  isExpense,
});
