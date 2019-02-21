/**
 * Crafted in Erebor by thorin on 2019-02-15
 */
import { Map } from 'immutable';

import CollectionsReducer, { INITIAL_STATE } from './collections.reducer';
import * as actionTypes from '../actionTypes';

const mockArrayCollections = [
    { title: 'Foo', uid: 'Bar', description: 'Foo bar' },
    { title: 'Foo1', uid: 'Bar1', description: 'Foo bar 1' },
    { title: 'Foo2', uid: 'Bar2', description: 'Foo bar 2' }
];

const initializedMapCollections = Map({
    'Bar': { title: 'Foo', uid: 'Bar', description: 'Foo bar' },
    'Bar1': { title: 'Foo1', uid: 'Bar1', description: 'Foo bar 1' },
    'Bar2': { title: 'Foo2', uid: 'Bar2', description: 'Foo bar 2' }
});

it('should return the initial state', () => {
    expect(CollectionsReducer(undefined, {})).toEqual(INITIAL_STATE);
});

it('should initialized a map of collections on COLLECTIONS_FETCH_SUCCESS', () => {
    const stateAfterCollectionsFetchSuccess =
        CollectionsReducer(
            INITIAL_STATE, {
                type: actionTypes.COLLECTIONS_FETCH_SUCCESS,
                payload: mockArrayCollections
            });

    expect(Map.isMap(stateAfterCollectionsFetchSuccess.data)).toEqual(true);
    expect(stateAfterCollectionsFetchSuccess.loading).toEqual(false);
    expect(stateAfterCollectionsFetchSuccess.data).toEqual(initializedMapCollections);
});

it('should store an error message on COLLECTIONS_FETCH_FAILED', () => {
    const errorMessage = 'Something went wrong';
    const initialState =
        CollectionsReducer(
            INITIAL_STATE, {
                type: actionTypes.COLLECTIONS_FETCH_SUCCESS,
                payload: mockArrayCollections
            });
    const stateAfterCollectionsFetchFailed =
        CollectionsReducer(
            initialState, {
                type: actionTypes.COLLECTIONS_FETCH_FAILED,
                message: errorMessage
            });

    expect(Map.isMap(stateAfterCollectionsFetchFailed.data)).toEqual(true);
    expect(stateAfterCollectionsFetchFailed.data.size).toEqual(0);
    expect(stateAfterCollectionsFetchFailed.loading).toEqual(false);
    expect(stateAfterCollectionsFetchFailed.error).toEqual(errorMessage);
});
