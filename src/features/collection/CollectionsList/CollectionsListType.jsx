import React, {Component} from 'react';
import  { ListItem, Image } from 'semantic-ui-react';

class CollectionsListType extends Component {
    render() {
        return (
            <ListItem>
                <Image as="a" size="mini" circular src="assets/Bellatrix.png"/>
            </ListItem>
        );
    }
}

export default CollectionsListType;
