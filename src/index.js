import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import rootReducer from './store/reducers'
import './index.scss'
import AppRouter from './route'

const middlewareEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const composedEnhancers = compose(middlewareEnhancer)

const persistConfig = {
  key: 'history',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, undefined, composedEnhancers)
const persistor = persistStore(store)

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
)