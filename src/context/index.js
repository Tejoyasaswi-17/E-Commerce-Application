import { createContext, useContext, useReducer } from "react";


// Prepare data layer
export const StateContext = createContext();

// Wrap the app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information out of data layer
export const useStateValue = () => useContext(StateContext);
