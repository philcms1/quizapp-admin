/**
 * Crafted in Erebor by thorin on 2019-02-11
 */
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import watchFetchCollections from './collections/collections.sagas';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    // TODO: only load logger in DEV/TEST
    const middlewares = [sagaMiddleware, ReduxThunk, logger];

    const store = createStore(rootReducer, applyMiddleware(...middlewares));

    // TODO: refactor to load multiple sagas
    sagaMiddleware.run(watchFetchCollections);

    return store;
};

export default configureStore;
