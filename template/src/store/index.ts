import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import example from '../reducers/example';
import testSaga from '../sagas/example';

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        example,
    },
    middleware: [sagaMiddleware]
  })
sagaMiddleware.run(testSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store