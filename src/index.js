import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { BrowserRouter as BR, } from 'react-router-dom';
import store from '../src/store.js';
import { Auth0Provider } from '@auth0/auth0-react';


const { REACT_APP_DOMAIN, REACT_APP_CLIENTID } = process.env;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BR>
        <Auth0Provider
          domain="dev-xkf26a2c.us.auth0.com"
          clientId="aWRUKeQhPDu4D9pBkPtYeHkJlBt86LbY"
          redirectUri={'/profile'}
        >
          <App />
        </Auth0Provider>
      </BR>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
