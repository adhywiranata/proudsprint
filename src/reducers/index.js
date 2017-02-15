import { combineReducers } from 'redux';

import storiesReducer from './storiesReducer';

const rootReducer = combineReducers({
  storiesData: storiesReducer,
});

export default rootReducer;
