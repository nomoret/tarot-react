import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import cards from "./reducer/cards";
import rootSaga from "../redux/saga";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

const env = process.env.NODE_ENV;

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routerMiddleware(history)];

const reducer = history =>
  combineReducers({
    cards,
    router: connectRouter(history)
  });

let store;
if (env === "development") {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(
    reducer(history),
    composeEnhancer(applyMiddleware(...middleware))
  );
} else {
  store = createStore(
    reducer(history),
    compose(applyMiddleware(...middleware))
  );
}

sagaMiddleware.run(rootSaga);

export { history };
export default store;
