import React, { createContext, useContext, useReducer } from "react";
import { useProductReducer } from './reducers'

import { reducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

const GlobalUserContext = createContext();

const useGlobalUserContext = () => useContext(GlobalUserContext);

const GlobalUserState = {};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, GlobalUserState);

  return (
    <GlobalUserContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalUserContext.Provider>
  );
};


export { StoreProvider, useStoreContext, UserContextProvider, useGlobalUserContext };
