/**
 * Crafted in Erebor by thorin on 2019-02-15
 */
import * as collectionsActions from './collections.actions';
import * as actionTypes from '../actionTypes';

it('should dispatch COLLECTIONS_FETCH on initialization of collections', () => {
    const expectedAction = {
        type: actionTypes.COLLECTIONS_FETCH
    };
    expect(collectionsActions.initCollections()).toEqual(expectedAction);
});
