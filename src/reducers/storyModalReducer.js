import * as ActionTypes from '../actions/constants';

import storiesData from '../../data/stories.json';

const latestId = storiesData.stories[storiesData.stories.length - 1].id;

const initialState = {
  isModalVisible: false,
  newStoryForm: {
    id: latestId + 1,
    category: '',
    user: '',
    profilePictureUrl: 'http://hansensphotography.com/wp-content/uploads/2010/09/professional-business-portraits.png',
    story: '',
    tags: [],
    createdAt: '',
  },
};

const toggleNewStoryModal = (state, isModalVisible) => {
  const newState = Object.assign({}, state);
  newState.isModalVisible = isModalVisible;
  return newState;
};

const handleChangeNewStoryForm = (state, updatedField) => {
  const newState = Object.assign({}, state);
  newState.newStoryForm[updatedField.storyKey] = updatedField.storyValue;
  return newState;
};

const storyModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_NEW_STORY_MODAL:
      return toggleNewStoryModal(state, action.payload);
    case ActionTypes.HANDLE_CHANGE_NEW_STORY_FORM:
      return handleChangeNewStoryForm(state, action.payload);
    default:
      return state;
  }
};

export default storyModalReducer;
