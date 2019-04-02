import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { cards, boards } from "./data";

import "./index.css";
import App from "./App";

import rootReducer from "./reducers";

const store = createStore(rootReducer, {
  cards,
  boards
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// console.log(store.getState());

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(Actions.addBoard("my New Board"));
// store.dispatch(Actions.addCard("my New Card", 1));
// store.dispatch(Actions.removeBoard(1));
// store.dispatch(Actions.removeCard("2"));
// store.dispatch(Actions.transferCard("1", 2));

// render(<App />, document.getElementById("root"));
