// @flow
import type { Saga } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser():Saga<void> {
  try {
    const p = yield call(getPeople);
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: p });
  } catch (e) {
    console.warn(e);
    yield put({ type: 'FETCH_DATA_FAIL' });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga(): Saga<void> {
  yield takeEvery('FETCH_DATA_START', fetchUser);
}

export { mySaga };

const people = [
  { name: 'Nader', age: 36 },
  { name: 'Amanda', age: 24 },
  { name: 'Jason', age: 44 },
];

const getPeople = ():Promise<typeof people> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(people);
    }, 3000);
  });
};
