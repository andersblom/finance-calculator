// @flow
import React from 'react';

import './DisplayTotal.css';

const DisplayTotal = (
  {
    total,
  }:{
    total: number,
  },
) => (
  <div className="totalAmount">
    Total: <span className={total >= 0 ? 'pos' : 'neg'}>{total.toLocaleString()}</span>
  </div>
);

export default DisplayTotal;
