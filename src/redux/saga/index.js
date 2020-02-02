import { all, fork } from "redux-saga/effects";
import cardSaga from "./cards";

export default function* rootSaga() {
  yield all([fork(cardSaga)]);
}
