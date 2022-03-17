import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
// import { store } from "./app/store";
import { Provider } from "react-redux";
import { createStore } from "redux";
import * as serviceWorker from "./serviceWorker";
import reducer from "./store/reducer";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//after page refresh - RERENDER page by getting user name form the local storage
const user = localStorage.getItem("user");
store.dispatch({ type: "ON_AUTH", payload: user });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
