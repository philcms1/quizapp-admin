import React, {Component} from 'react';
import { Segment, Item, Button, Icon } from 'semantic-ui-react';

class CollectionsListItem extends Component {
    render() {
        const { collection } = this.props;

        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={'assets/' + collection.logo +'.png'} />
                            <Item.Content>
                                <Item.Header as="a">{collection.title}</Item.Header>
                                <Item.Description>
                                    <a>{collection.numQuestions} questions</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    <Icon name="clock" /> {collection.date} |
                    <Icon name="eye" /> {collection.status}
                  </span>
                </Segment>
                <Segment clearing>
                    <span>{collection.description}</span>
                    <Button as="a" color="teal" floated="right" content="View" />
                </Segment>
            </Segment.Group>
        );
    }
}

export default CollectionsListItem;
