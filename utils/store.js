import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers'
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware()

const enhancers = compose(
	typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
		? window.devToolsExtension && window.devToolsExtension()
		: f => f
)

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)

export default initialState => {
	const store = createStoreWithMiddleware(rootReducer, initialState, enhancers)

	store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
	}

	store.runSagaTask();

	return store
}

