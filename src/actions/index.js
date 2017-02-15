import * as ActionTypes from './constants';

export const fetchStories = () => ({
  type: ActionTypes.FETCH_STORIES,
  text: 'select all stories',
});

export const fetchStoryDetails = storyId => ({
  type: ActionTypes.FETCH_STORY_DETAILS,
  payload: storyId,
  text: 'display story details',
});

export const addStory = newStory => ({
  type: ActionTypes.ADD_STORY,
  payload: newStory,
  text: 'add new story object to stories',
});

export const toggleNewStoryModal = isModalVisible => ({
  type: ActionTypes.TOGGLE_NEW_STORY_MODAL,
  text: 'show new story modal window',
  payload: isModalVisible,
});

export const handleChangeNewStoryForm = updatedField => ({
  type: ActionTypes.HANDLE_CHANGE_NEW_STORY_FORM,
  text: 'change form state',
  payload: updatedField,
});

export const incrementNewStoryFormId = () => ({
  type: ActionTypes.INCREMENT_NEW_STORY_FORM_ID,
  text: 'new story has been created. add story id by 1',
});
