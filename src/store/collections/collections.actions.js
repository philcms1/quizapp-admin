/**
 * Crafted in Erebor by thorin on 2019-02-11
 */
import * as actionTypes from '../actionTypes';

export const initCollections = () => {
  return dispatch => {
      dispatch({ type: actionTypes.COLLECTIONS_FETCH });
  }
};
