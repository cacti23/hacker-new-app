import {
  HANDLE_PAGE,
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
        stories: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      };
    case REMOVE_STORIES:
      return {
        ...state,
        stories: state.stories.filter(
          story => story.objectID !== action.payload
        ),
      };
    case HANDLE_PAGE:
      if (action.payload === 'inc') {
        let nextPage = state.page + 1;
        if (nextPage > state.nbPages - 1) {
          nextPage = 0;
        }
        return { ...state, page: nextPage };
      }
      if (action.payload === 'dec') {
        let prevPage = state.page - 1;
        if (prevPage < 0) {
          prevPage = state.nbPages - 1;
        }
        return { ...state, page: prevPage };
      }
      return { ...state };
    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};

export default reducer;
