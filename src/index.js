import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./App";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "plus":
      return state + 1;

    case "minus":
      return state > 0 ? state -1 : state;

    case "reset":
      return 0;

    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
