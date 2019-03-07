import React, {Component} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class CollectionForm extends Component {
    render() {
        const { handleCancel } = this.props;
        return (
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Collection Title</label>
                        <input placeholder="Title" />
                    </Form.Field>
                    <Form.Field>
                        <label>Activation Date</label>
                        <input type="date" placeholder="Activation Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input placeholder="User visible description" />
                    </Form.Field>
                    <Form.Field>
                        <label>Types</label>
                        <input placeholder="Enter the type tags" />
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button onClick={handleCancel} type="button">Cancel</Button>
                </Form>
            </Segment>
        );
    }
}

export default CollectionForm;
