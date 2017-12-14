import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as worksheetActions from '../../actions/worksheetActions';

import WorkSpaceHeader from '../../components/Worksheet/WorkSpaceHeader';
import BudgetItems from '../../components/Worksheet/BudgetItems';

import './WorksheetEditor.css';

class WorksheetEditor extends Component {
  render() {
    const { items, title } = this.props.worksheet;
    const { changeWorksheetTitle, addBudgetItem } = this.props;
    return (
      <div className="WorksheetEditorWorkSpace__container">
        <WorkSpaceHeader changeWorksheetTitle={changeWorksheetTitle} title={title} />
        <BudgetItems addBudgetItem={addBudgetItem} items={items} />
      </div>
    );
  }
}

WorksheetEditor.propTypes = {
  worksheet: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array])).isRequired,
  changeWorksheetTitle: PropTypes.func.isRequired,
  addBudgetItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  worksheet: state.worksheet,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(worksheetActions, dispatch)
);

const WorksheetEditorContainer = connect(mapStateToProps, mapDispatchToProps)(WorksheetEditor);

export default WorksheetEditorContainer;
