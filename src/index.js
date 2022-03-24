import React from 'react';
import ReactDOM from 'react-dom';
import { compose,createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers/reducers'
import thunk from 'redux-thunk'
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

//create our store to link our app to redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
