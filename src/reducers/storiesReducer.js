import * as ActionTypes from '../actions/constants';

import storiesData from '../../data/stories.json';

const initialState = [];

const fetchStories = (state) => {
  const newState = [...state, ...storiesData.stories];
  return newState;
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_STORIES:
      return fetchStories(state);
    default:
      return state;
  }
};

export default storiesReducer;
