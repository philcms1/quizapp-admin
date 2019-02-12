/**
 * Crafted in Erebor by thorin on 2019-02-11
 */
import { connect } from 'react-redux';

import CollectionsWidget from './collections-widget.component';
import * as collectionsActions from '../../store/collections/collections.actions';

const mapStateToProps = state => ({
    collections: state.collections.data,
    loading: state.collections.loading,
    error: state.collections.error
});

const mapDispatchToProps = dispatch => ({
    initCollections: () => dispatch(collectionsActions.initCollections())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionsWidget)
