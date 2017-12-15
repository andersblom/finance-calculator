import React from 'react';
import PropTypes from 'prop-types';

import './SingleBudgetListItem.css';

const SingleBudgetListItem = ({ item }) => (
  <div className="listItem__entry__container">
    <div className="name">{item.name}</div>
    <div className="amount">{item.amount}</div>
    <div className="actions"><button>Edit</button><button>Delete</button></div>
  </div>
);

SingleBudgetListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    expense: PropTypes.bool,
  }).isRequired,
};

export default SingleBudgetListItem;
