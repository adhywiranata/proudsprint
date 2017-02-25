import * as ActionTypes from '../actions/constants';

const initialState = [];

const fetchStoriesSuccess = (state, stories) => {
  const newState = [...state, ...stories];
  return newState;
};

const addStory = (state, newStory) => {
  const newStoryObj = Object.assign({}, newStory);
  const newState = [...state, newStoryObj];
  return newState;
};

const storiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_STORIES_SUCCESS:
      return fetchStoriesSuccess(state, action.stories);
    case ActionTypes.ADD_STORY:
      return addStory(state, action.payload);
    default:
      return state;
  }
};

export default storiesReducer;
