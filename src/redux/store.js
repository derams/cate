import { createStore, applyMiddlewar } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import logger from 'rudex-logger'

const store = createStore(rootReducer,applyMiddlewar(thunk,logger))

export default store
