import * as ActionTypes from '../actions/constants';

import storiesData from '../../data/stories.json';

const initialState = storiesData.stories;

const fetchStories = (state) => {
  const newState = Object.assign({}, state);
  return newState;
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER_PROFILE:
      return fetchStories(state);
    default:
      return state;
  }
};

export default storiesReducer;
