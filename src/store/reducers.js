/**
 * Crafted in Erebor by thorin on 2019-02-11
 */
import { combineReducers } from 'redux';

import CollectionsReducer from './collections/collections.reducer';

const rootReducer = combineReducers({
    collections: CollectionsReducer
});

export default rootReducer;
