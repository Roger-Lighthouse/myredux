import React from "react"
import ReactDOM from "react-dom"
import rootReducer from './reducers/root-reducer';
import App from "./containers/counter-container"
import App1 from "./containers/client-container"
import SmartSearch from './containers/smart-search-container'
import JobFunctions from './containers/job-container'

import StatsCompany from "./containers/stats-container"
import "./index.css"

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import reduxPromise from 'redux-promise-middleware'

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(rootReducer, applyMiddleware(reduxPromise(), middleware));

var destination = document.querySelector("#container")

// function test(){
//   window.confirm("??")
// }

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <ul className='header'>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/clients">Client</NavLink></li>
          <li><NavLink to="/counter">Counter</NavLink></li>
          <li><NavLink to="/stats">Stats</NavLink></li>
          <li><NavLink to="/joblists">Job Lists</NavLink></li>
        </ul>
        <div className='content'>
          <Route exact path="/" component={ SmartSearch } />
          <Route path="/clients" component={ App1 } />
          <Route path="/counter" component={ App } />
          <Route path="/stats" component={ StatsCompany } />
          <Route path="/joblists" component={ JobFunctions } />
        </div>
      </div>
    </HashRouter>




  </Provider>, destination
)
