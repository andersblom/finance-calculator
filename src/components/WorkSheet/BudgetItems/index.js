import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SingleBudgetListItem from '../SingleBudgetListItem';

function renderListOfItems(items) {
  return items.map((item) => {
    // This will be the key-prop for the item
    const keyProp = item.name
      .toLowerCase()
      .trim()
      // Removing spaces
      .replace(' ', '')
      // Removing special characters with regexp
      .replace(/[^a-zA-Z ]/g, '');

    return (
      <SingleBudgetListItem key={keyProp} item={item} />
    );
  });
}

export default class BudgetItems extends Component {
  render() {
    const income = this.props.items.filter(item => item.expense === false);
    const expenses = this.props.items.filter(item => item.expense === true);

    return (
      <div>
        <div>
          <h2>Income</h2>
          <div>{renderListOfItems(income)}</div>
        </div>
        <div>
          <h2>Expenses</h2>
          <div>{renderListOfItems(expenses)}</div>
        </div>
      </div>
    );
  }
}

BudgetItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

BudgetItems.defaultProps = {
  items: [],
};
