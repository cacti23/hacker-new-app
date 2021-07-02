import {
  HANDLE_SEARCH,
  REMOVE_STORIES,
  SET_LOADING,
  SET_STORIES,
} from './action';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    case SET_STORIES:
      return {
        ...state,
        stories: action.payload,
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
      };
    case REMOVE_STORIES:
      return {
        ...state,
        stories: state.stories.filter(
          story => story.objectID !== action.payload
        ),
      };
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};

export default reducer;
