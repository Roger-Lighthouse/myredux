import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import clientReducer from './client-reducer'
import countReducer from './count-reducer'

const rootReducer = combineReducers ({
  clientReducer: clientReducer,
  countReducer: countReducer,
  router: routerReducer
})

export default rootReducer
