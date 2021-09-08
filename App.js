import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import HomeScreen from "./screens/HomeScreen"

const initalState = {
  action: "openMenu"
}

const reducer = (state = initalState, action) => {

  switch (action.type) {
    case "OPEN_MENU": return {action: "openMenu"};
    case "CLOSE_MENU": return {action: "closeMenu"};
    default: return state;
  }

/*
  if (action.type == "CLOSE_MENU"){
    return {action: "closeMenu"};
  }else if(action.type == "OPEN_MENU"){
    return {action: "openMenu"};
  }
  return state;
  */ 
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <HomeScreen/>
  </Provider>
)
export default App;
