import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import rootReducer from './redux/reducers'
import { ConfigProvider } from 'antd';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, {
  windowDimensions: { width: 0, height: 0 },
  user: { userData: Object },
  recruterRegistration: {hrData: Object},

  // auth:{auth:Boolean},
  
},enhancers);

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
    <ConfigProvider direction="rtl">
      <App />
    </ConfigProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
