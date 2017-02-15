import { combineReducers } from 'redux';

import storiesReducer from './storiesReducer';
import storyModalReducer from './storyModalReducer';

const rootReducer = combineReducers({
  storiesData: storiesReducer,
  storyModalData: storyModalReducer,
});

export default rootReducer;
