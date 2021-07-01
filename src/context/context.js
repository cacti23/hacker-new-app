import React, { useContext, useReducer, useEffect, createContext } from 'react';
import { SET_LOADING, SET_STORIES, HANDLE_SEARCH } from './action';
import reducer from './reducer';

const HACKER_NEWS_API = 'http://hn.algolia.com/api/v1/search?';

const initialState = {
  isLoading: false,
  hits: [],
  query: 'react',
  page: 0,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async url => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: SET_STORIES, payload: data.hits });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: SET_LOADING });
  };

  const handleSearch = query => {
    dispatch({ type: HANDLE_SEARCH, payload: query });
  };

  useEffect(
    () =>
      fetchStories(
        `${HACKER_NEWS_API}&query=${state.query}&page=${state.page}`
      ),
    [state.query, state.page]
  );

  return (
    <AppContext.Provider value={{ ...state, handleSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
