import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import rootReducer from "./redux/reducers";
import { ConfigProvider } from "antd";

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, {
  windowDimensions: { width: 0, height: 0 },
  user: { userData: Object },

  // auth:{auth:Boolean},
  
},enhancers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <ConfigProvider direction="rtl">
      <App />
    </ConfigProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
