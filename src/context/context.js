import React, { useContext, useReducer, useEffect, createContext } from 'react';
import reducer from './reducer';

const HACKER_NEWS_API = 'http://hn.algolia.com/api/v1/search?';

const initialState = {
  isLoading: true,
  hits: [],
  query: 'react',
  page: 0,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async url => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.hits);
  };

  const handleSearch = query => {
    console.log(state.query);
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
