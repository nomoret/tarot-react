import { createStore } from "redux";
import cards from "./reducer/cards";

let store = createStore(
  cards,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
