
//importing the react library
import React from 'react';
//importing the virtual dom
import ReactDOM from 'react-dom';
//importing css for the app
import './index.css';
//import the app component
import App from './App';
//I NEED TO LOOK MORE INTO SERVICE WORKER TBH....
import * as serviceWorker from './serviceWorker';
//import Higher order component from react redux that taxkes in the app and passes in the store as props
import { Provider } from 'react-redux';
//import create store from redux, import apply middleware to get chrome dev tools, import compose because multiple middleware
import { createStore, applyMiddleware, compose } from 'redux';
//thunk to return asynchronous functions in action creators
import thunk from 'redux-thunk';
//importing my reducer to put into redux store
import rootReducer from './reducers/rootReducer.js';
//import browserRouter renamed as router to have client side routing
import { BrowserRouter as Router } from 'react-router-dom';


//Following a pattern from redux- line 24 - 34 to apply multiple middlewares using compose and apply middleware for thunk and chrome dev tools
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

//Creating redux store
const store = createStore(rootReducer, enhancer)


//React app wrapper in two higher order components.... Redux provider and browserRoute aka router
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
