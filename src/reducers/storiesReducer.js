import * as ActionTypes from '../actions/constants';

import storiesData from '../../data/stories.json';

const initialState = [];

const fetchStories = (state) => {
  const newState = [...state, ...storiesData.stories];
  return newState;
};

const addStory = (state, newStory) => {
  const newState = [...state, newStory];
  return newState;
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_STORIES:
      return fetchStories(state);
    case ActionTypes.ADD_STORY:
      return addStory(state, action.payload);
    default:
      return state;
  }
};

export default storiesReducer;
