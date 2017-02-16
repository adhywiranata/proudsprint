// source: http://redux.js.org/docs/recipes/WritingTests.html
// source 2: https://medium.com/@ryancollinsio/testing-react-redux-applications-fee79ac0087f#.epc8ahreb

import * as Actions from '../src/actions';
import * as ActionTypes from '../src/actions/constants';
import storiesReducer from '../src/reducers/storiesReducer';

import storiesData from '../data/stories.json';

// Testing Action Creators
describe('actions', () => {
  it('should create action to fetch stories', () => {
    const text = 'select all stories';
    const expectedAction = {
      type: ActionTypes.FETCH_STORIES,
      text,
    };
    expect(Actions.fetchStories()).toEqual(expectedAction);
  });
});

// Asynch Action Creators
// TODO

// Testing Reducers
describe('stories reducer', () => {
  it('should return initial state', () => {
    expect(storiesReducer(undefined, [])).toEqual([]);
  });

  it('should handle FETCH_STORIES', () => {
    expect(
      storiesReducer([], {
        type: ActionTypes.FETCH_STORIES,
        text: 'select all stories',
      }),
    ).toEqual(storiesData.stories);
  });
});

// Testing Components with Enzyme
// TODO

// Testing Connected Components (React-redux) / Containers
// http://redux.js.org/docs/recipes/WritingTests.html#connected-components
// TODO
