import React from 'react';
import PropTypes from 'prop-types';

import './SingleBudgetListItem.css';

const SingleBudgetListItem = ({ item }) => (
  <div className="listItem__entry__container">{item.name}</div>
);

SingleBudgetListItem.propTypes = {
  item: PropTypes.objectOf({
    name: PropTypes.string,
    amount: PropTypes.number,
    expense: PropTypes.bool,
  }).isRequired,
};

export default SingleBudgetListItem;
