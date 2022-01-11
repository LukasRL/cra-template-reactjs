import { call, takeLatest, put } from 'redux-saga/effects'
import {success, fail, initialExample} from '../reducers/example';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


async function fetchSimulate(params: number) {
    await delay(3000)
}

function* exampleFetch() {
   try {
      yield call(fetchSimulate, 1);
      yield put(success())
   } catch (e) {
      yield put(fail());
   }
}

function* rootSaga() {
    yield takeLatest(initialExample, exampleFetch);
  }

  export default rootSaga;
