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
