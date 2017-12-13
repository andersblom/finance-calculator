import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as workSheetActions from '../actions/workSheetActions';

import WorkSheetEditorSidebar from '../components/WorkSheetEditorSidebar';
import WorkSheetEditorWorkSpace from '../components/WorkSheetEditorWorkSpace';

class WorksheetEditor extends Component {
  render() {
    return (
      <div>
        <WorkSheetEditorSidebar />
        <WorkSheetEditorWorkSpace />
      </div>
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
