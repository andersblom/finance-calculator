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

exports.worksheet = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
