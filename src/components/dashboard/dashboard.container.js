/**
 * Crafted in Erebor by thorin on 2019-02-11
 */
import { connect } from 'react-redux';

import Dashboard from './dashboard.component';
import * as collectionsActions from '../../store/collections/collections.actions';
import * as collectionsSelectors from '../../store/collections/collections.selectors';

const mapStateToProps = state => ({
    collections: collectionsSelectors.getCollectionsByLocale(state),
    isLoadingCollections: state.collections.loading,
    loadingCollectionsError: state.collections.error
});

const mapDispatchToProps = dispatch => ({
    initCollections: () => dispatch(collectionsActions.initCollections())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
