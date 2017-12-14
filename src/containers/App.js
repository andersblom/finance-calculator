import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as worksheetActions from '../actions/worksheetActions';

import WorksheetEditorContainer from './WorksheetEditorContainer';
import Header from '../components/Header';

class AppContainer extends Component {
  render() {
    // This should be determined by Redux
    const isUserAuthenticated = false;

    return (
      <div className="AppContainer">
        <Header isLoggedIn={isUserAuthenticated} />
        <Route exact path="/" component={WorksheetEditorContainer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    worksheet: worksheetActions,
  }, dispatch)
);

const App = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default App;
