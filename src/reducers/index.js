import { combineReducers } from 'redux';

import { worksheet } from './worksheetReducer';

const rootReducer = combineReducers({ worksheet });

export default rootReducer;
