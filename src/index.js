import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import FormAdicionais from './forms/FormAdicionais'
import FormContato from './forms/FormContato'

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <FormContato/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
