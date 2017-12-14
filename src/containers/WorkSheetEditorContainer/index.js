import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as workSheetActions from '../../actions/workSheetActions';

import WorkSpaceHeader from '../../components/WorkSheet/WorkSpaceHeader';
import BudgetItems from '../../components/WorkSheet/BudgetItems';

import './WorkSheetEditor.css';

class WorksheetEditor extends Component {
  render() {
    return (
      <div className="WorkSheetEditorWorkSpace__container">
        <WorkSpaceHeader />
        <BudgetItems />
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

const WorkSheetEditorContainer = connect(mapStateToProps, mapDispatchToProps)(WorksheetEditor);

export default WorkSheetEditorContainer;
