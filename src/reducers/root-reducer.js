import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import clientReducer from './client-reducer'
import jobReducer from './job-reducer'
import countReducer from './count-reducer'
import statReducer from './stat-reducer'

const rootReducer = combineReducers({
  client: clientReducer,
  job: jobReducer,
  count: countReducer,
  stat: statReducer,
  router: routerReducer
})

export default rootReducer
