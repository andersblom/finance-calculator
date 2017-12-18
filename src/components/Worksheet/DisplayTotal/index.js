import React from 'react';
import PropTypes from 'prop-types';

import './DisplayTotal.css';

const DisplayTotal = ({ total }) => (
  <div className="totalAmount">
    Total: <span className={total >= 0 ? 'pos' : 'neg'}>{total.toLocaleString()}</span>
  </div>
);

DisplayTotal.propTypes = {
  total: PropTypes.number.isRequired,
};

export default DisplayTotal;
