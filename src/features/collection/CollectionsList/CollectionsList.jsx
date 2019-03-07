import React, {Component} from 'react';

import CollectionsListItem from './CollectionsListItem';

class CollectionsList extends Component {
    render() {
        const { collections } = this.props;

        return (
            <div>
                <h1>Collections List</h1>
                {collections.map(collection => (<CollectionsListItem key={collection.id} collection={collection}/>))}
            </div>
        );
    }
}

export default CollectionsList;
