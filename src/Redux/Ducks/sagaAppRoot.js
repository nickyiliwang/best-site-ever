import { put, call, takeLatest } from "redux-saga/effects";

import { getRestaurantsWithLocation } from "../../api/openTableAPICall";

import {
  FETCH_RESTAURANTS_REQUEST,
  redux_SetRestaurantsData,
  redux_FetchRestaurantsSuccess,
  redux_FetchRestaurantsFailure,
} from "./ducksAppRoot";

function* fetchRestaurants(action) {
  const location = action.payload;
  const result = yield call(getRestaurantsWithLocation, location);

  //   better error handling
  if (result) {
    yield put(redux_SetRestaurantsData(result));
    yield put(redux_FetchRestaurantsSuccess(result));
  } else {
    yield put(redux_FetchRestaurantsFailure(result));
  }
}

export function* sagaFetchUserData() {
  yield takeLatest(FETCH_RESTAURANTS_REQUEST, fetchRestaurants);
}
