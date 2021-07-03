import React, { useContext, useReducer, useEffect, createContext } from 'react';
import {
  SET_LOADING,
  SET_STORIES,
  HANDLE_SEARCH,
  REMOVE_STORIES,
  HANDLE_PAGE,
} from './action';
import reducer from './reducer';

const HACKER_NEWS_API = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
  isLoading: false,
  stories: [],
  query: 'react',
  page: 0,
  nbPages: 0,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async url => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
      dispatch({ type: SET_LOADING });
    } catch (error) {
      dispatch({ type: SET_LOADING });
      console.log(error);
    }
  };

  const handleSearch = query => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  const removeStories = id => {
    dispatch({ type: REMOVE_STORIES, payload: id });
  };

  const handlePage = value => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(
    () =>
      fetchStories(
        `${HACKER_NEWS_API}&query=${state.query}&page=${state.page}`
      ),
    [state.query, state.page]
  );

  return (
    <AppContext.Provider
      value={{ ...state, handleSearch, removeStories, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
