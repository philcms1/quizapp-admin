/**
 * Crafted in Erebor by thorin on 2019-02-11
 */
import { put, call, takeEvery } from 'redux-saga/effects';

import * as collectionsApi from '../../apis/collections';
import * as actionTypes from '../actionTypes';

function* fetchCollections() {
    try {
        const collections = yield call(collectionsApi.fetchCollections);
        yield put({ type: actionTypes.COLLECTIONS_FETCH_SUCCESS, payload: collections });
    } catch (e) {
        yield put({ type: actionTypes.COLLECTIONS_FETCH_FAILED, message: e.message });
    }
}

export default function* watchFetchCollections() {
    yield takeEvery(actionTypes.COLLECTIONS_FETCH, fetchCollections);
}
