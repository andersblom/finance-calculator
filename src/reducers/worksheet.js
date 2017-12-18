import { CHANGE_WORKSHEET_TITLE, ADD_BUDGET_ITEM } from '../actions/actionTypes';

const initialState = {
  title: 'My awesome worksheet',
  items: [
    {
      name: 'Monthly salary',
      amount: 4000,
      expense: false,
    },
    {
      name: 'Apartment rent',
      amount: 1545,
      expense: true,
    },
    {
      name: 'Food',
      amount: 800,
      expense: true,
    },
    {
      name: 'Electric/Water/Internet',
      amount: 300,
      expense: true,
    },
    {
      name: 'Fun times',
      amount: 500,
      expense: true,
    },
  ],
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
          },
        ],
      });
    default:
      return state;
  }
};
