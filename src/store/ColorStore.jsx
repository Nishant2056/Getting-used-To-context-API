import { createContext, useReducer } from "react";

export const ColorContext = createContext();
const initialState = { color: "Red" };

const colorReducer = (state, action) => {
  switch (action.type) {
    case "SET_COLOR":
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

const ColorStore = ({ children }) => {
  const [state, dispatch] = useReducer(colorReducer, initialState);
  // const handleBlue = (color) => {
  //   dispatch({ type: "SET_COLOR", payload: color });
  // };
  // const handleGreen = (color) => {
  //   dispatch({ type: "SET_COLOR", payload: color });
  // };
  // const handleGray = (color) => {
  //   dispatch({ type: "SET_COLOR", payload: color });
  // };
  // const handleBlack = (color) => {
  //   dispatch({ type: "SET_COLOR", payload: color });
  // };
  // const handleTransparent = (color) => {
  //   dispatch({ type: "SET_COLOR", payload: color });
  // };
  const setColor = (color) => {
    dispatch({ type: "SET_COLOR", payload: color });
  };
  return (
    <ColorContext.Provider
      value={{
        state,
        setColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default ColorStore;
