// @flow
import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as worksheetActions from '../../actions/worksheetActions';

import WorkSpaceHeader from '../../components/Worksheet/WorkSpaceHeader';
import BudgetItems from '../../components/Worksheet/BudgetItems';
import DisplayTotal from '../../components/Worksheet/DisplayTotal';

import './WorksheetEditor.css';
import { changeWorksheetTitle } from '../../actions/worksheetActions';

type Props = {
  worksheet: { items: Array<{
    name: string,
    amount: number,
    expense: boolean,
    id: string
  }>, title: string },
  changeWorksheetTitle: Function,
  addBudgetItem: Function,
  editBudgetItem: Function,
  deleteBudgetItem: Function,
}

class WorksheetEditor extends Component<Props> {
  calculateTotal() {
    const { items } = this.props.worksheet;
    const expenses = items
      .filter(item => item.expense === true)
      .reduce((prev, curr) => prev + curr.amount, 0);
    const income = items
      .filter(item => item.expense === false)
      .reduce((prev, curr) => prev + curr.amount, 0);

    const calculatedTotal = income - expenses;

    return calculatedTotal;
  }

  render() {
    const { items, title } = this.props.worksheet;
    const {
      changeWorksheetTitle,
      addBudgetItem,
      editBudgetItem,
      deleteBudgetItem,
    } = this.props;
    return (
      <div className="WorksheetEditorWorkSpace__container">
        <WorkSpaceHeader changeWorksheetTitle={changeWorksheetTitle} title={title} />
        <BudgetItems deleteBudgetItem={deleteBudgetItem} editBudgetItem={editBudgetItem} addBudgetItem={addBudgetItem} items={items} />
        <DisplayTotal total={this.calculateTotal()} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  worksheet: state.worksheet,
});

const mapDispatchToProps = dispatch => (
  bindActionCreators(worksheetActions, dispatch)
);

const WorksheetEditorContainer = connect(mapStateToProps, mapDispatchToProps)(WorksheetEditor);

export default WorksheetEditorContainer;
