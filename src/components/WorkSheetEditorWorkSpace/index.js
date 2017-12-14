import React, { Component } from 'react';

import WorkSpaceHeader from './WorkSpaceHeader';

import './WorkSheetEditorWorkSpace.css';

export default class WorkSheetEditorWorkSpace extends Component {
  render() {
    return (
      <div className="WorkSheetEditorWorkSpace__container">
        <WorkSpaceHeader />
      </div>
    );
  }
}
