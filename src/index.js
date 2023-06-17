import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const reducer = (state = 0, action) => {
  if (action.type === "plus") {
    return state + 1;
  }
  if (action.type === "minus") {
    return  state > 0 ? state - 1 : state;
  }

  if (action.type === "reset") {
    return 0;
  }


  return state
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
