import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as workSheetActions from '../actions/workSheetActions';


class AppComponent extends Component {
  render() {
    return (
      <div>Hi</div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    worksheet: workSheetActions,
  }, dispatch)
);

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
