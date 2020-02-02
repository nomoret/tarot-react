import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  CREATE_SHUFFLE_DECK_SUCCESS,
  CREATE_SHUFFLE_DECK_FAILURE,
  CREATE_SHUFFLE_DECK_REQUEST,
  SELECT_CARD_REQUEST,
  SELECT_CARD_FAILURE,
  SELECT_CARD_SUCCESS,
  CLEAR_CARD_REQUEST,
  CLEAR_CARD_FAILURE,
  CLEAR_CARD_SUCCESS
} from "../reducer/cards";

import { createDeck } from "../../utils/random";

function* createShuffleDeck(action) {
  try {
    const deckList = yield call(createDeck, action.data.deckCount);
    yield put({
      type: CREATE_SHUFFLE_DECK_SUCCESS,
      data: {
        deckList,
        selectCount: action.data.selecCount
      }
    });
  } catch (e) {
    console.error(e);
    yield put({ type: CREATE_SHUFFLE_DECK_FAILURE, data: e.message });
  }
}

function* watchCreateShuffleDeck() {
  yield takeEvery(CREATE_SHUFFLE_DECK_REQUEST, createShuffleDeck);
}

function* selectCard(action) {
  try {
    yield put({ type: SELECT_CARD_SUCCESS, data: action.data });
  } catch (e) {
    console.error(e);
    yield put({ type: SELECT_CARD_FAILURE, data: e.message });
  }
}

function* watchSelectCard() {
  yield takeEvery(SELECT_CARD_REQUEST, selectCard);
}

function* clearCard() {
  try {
    yield put({ type: CLEAR_CARD_SUCCESS });
  } catch (e) {
    console.error(e);
    yield put({ type: CLEAR_CARD_FAILURE, data: e.message });
  }
}

function* watchClearCard() {
  yield takeEvery(CLEAR_CARD_REQUEST, clearCard);
}

export default function* cardSaga() {
  yield all([
    fork(watchCreateShuffleDeck),
    fork(watchSelectCard),
    fork(watchClearCard)
  ]);
}
