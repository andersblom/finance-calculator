import { CHANGE_WORKSHEET_TITLE } from '../actions/actionTypes';

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
      console.log(action.title);
      return {
        ...state,
        title: action.title,
      };
    default:
      return state;
  }
};
