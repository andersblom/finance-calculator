import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BudgetItems extends Component {
  render() {
    console.log(this.props.items);
    return (
      <div>BudgetItems</div>
    );
  }
}

BudgetItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

BudgetItems.defaultProps = {
  items: [],
};
