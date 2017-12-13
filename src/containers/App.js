import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as workSheetActions from '../actions/workSheetActions';

import Header from '../components/Header';

class AppContainer extends Component {
  render() {
    // This should be determined by Redux
    const isUserAuthenticated = false;

    return (
      <div className="AppContainer">
        <Header isLoggedIn={isUserAuthenticated} />
      </div>
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

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default App;
