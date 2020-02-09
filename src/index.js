import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./component/App";

import store, { history } from "./redux/index";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );

render();
// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept("./component/App", () => {
    render();
  });
}
