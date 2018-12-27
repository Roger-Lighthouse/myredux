import React from "react"
import ReactDOM from "react-dom"
import { createStore , applyMiddleware } from "redux"
import { Provider } from "react-redux"
import countReducer from "./reducers/count-reducer"
//import rootReducer from './reducers';
import App from "./containers/App"
import "./index.css"
import createHistory from 'history/createBrowserHistory';
//import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { routerMiddleware } from 'react-router-redux';
//import { Route } from 'react-router';
import reduxPromise from 'redux-promise-middleware'



const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(countReducer)   //(rootReducer, applyMiddleware(reduxPromise(), middleware));
//const store = createStore(rootReducer, applyMiddleware(reduxPromise(), middleware));


var destination = document.querySelector("#container")


ReactDOM.render(
  <Provider store={store}>
      <App /><br/>
  </Provider>, destination
)
