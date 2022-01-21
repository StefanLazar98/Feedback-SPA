import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history' 


// const domain = process.env.REACT_APP_AUTH0_DOMAIN
// console.log(domain)
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

ReactDOM.render(
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

