import { CHANGE_WORKSHEET_TITLE } from './actionTypes';

export const changeWorksheetTitle = title => ({
  type: CHANGE_WORKSHEET_TITLE,
  title,
});
