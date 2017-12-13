import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as workSheetActions from '../actions/workSheetActions';

class WorksheetEditor extends Component {
  render() {
    return (
      <div>WorksheetEditor</div>
    );
  }
}

const mapStateToProps = state => ({
  worksheet: state.worksheet,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    worksheet: workSheetActions,
  }, dispatch)
);

const WorksheetEditorContainer = connect(mapStateToProps, mapDispatchToProps)(WorksheetEditor);

export default WorksheetEditorContainer;
