import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware()

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

// const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)

export default initialState => {
	const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  )

	store.runSagaTask = () => {
		if (store.sagaTask) return
    store.sagaTask = sagaMiddleware.run(rootSaga)
	}

	store.runSagaTask();

	return store
}
