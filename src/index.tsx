import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from 'worldwideandweb-storybook/dist/theme/theme';
import { MuiThemeProvider } from 'worldwideandweb-storybook/dist/components/External';
import { Router } from 'react-router-dom';
import history from './routes/history';

import awsExports from './utils/amplify-exports';
import Amplify from 'aws-amplify';
Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
