import uuidv4 from 'uuid/v4';
import { CHANGE_WORKSHEET_TITLE, ADD_BUDGET_ITEM, EDIT_BUDGET_ITEM, DELETE_BUDGET_ITEM } from '../actions/actionTypes';

const initialState = {
  title: null,
  items: [],
};

export const worksheet = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_WORKSHEET_TITLE:
      return {
        ...state,
        title: action.title,
      };

    case ADD_BUDGET_ITEM:
      return Object.assign({}, state, {
        items: [
          ...state.items,
          {
            name: action.name,
            amount: action.amount,
            expense: action.isExpense,
            id: uuidv4(),
          },
        ],
      });

    case EDIT_BUDGET_ITEM:
      return Object.assign({}, state, {
        items: [
          ...state.items.filter(i => i.id !== action.id),
          {
            ...state.items.filter(i => i.id === action.id)[0],
            name: action.name,
            amount: action.amount,
            id: action.id,
          },
        ],
      });

    case DELETE_BUDGET_ITEM:
      return Object.assign({}, state, {
        items: [
          ...state.items.filter(i => i.id !== action.id),
        ],
      });

    default:
      return state;
  }
};
