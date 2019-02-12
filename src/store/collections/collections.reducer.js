/**
 * Crafted in Erebor by thorin on 2019-02-11
 */
import { Map } from 'immutable';

import * as actionTypes from '../actionTypes';

const INITIAL_STATE = { data: Map(), error: null, loading: true };

const setCollections = (arrayCollections) => {
    return Map(arrayCollections.map(collection => ([collection.uid, collection])));
};

const CollectionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.COLLECTIONS_FETCH_SUCCESS:
            return { ...state, data: setCollections(action.payload), loading: false };
        case actionTypes.COLLECTIONS_FETCH_FAILED:
            return { ...state, error: action.message, loading: false };
        default:
            return state;
    }
};

export default CollectionsReducer;
