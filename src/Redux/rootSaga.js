import { all } from "redux-saga/effects";
import { sagaFetchUserData } from "./Ducks/sagaAppRoot";

export default function* rootSaga() {
  yield all([sagaFetchUserData()]);
}
