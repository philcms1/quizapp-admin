import React, {Component} from 'react';
import { Grid, Button } from 'semantic-ui-react';

import CollectionsList from '../CollectionsList/CollectionsList';
import CollectionForm from '../CollectionForm/CollectionForm';

const collections = [
    {
        id: 'a871ebef-45ef-c8af-193b-5134888a2c67',
        title: 'Harry Potter Universe',
        date: '2018-03-27T11:00:00+00:00',
        description: 'Do you know magic?',
        status: 'active',
        logo: 'Dumbledore',
        numQuestions: 100
    },
    {
        id: '24880eb1-cf62-b32b-0542-b6185b4017b3',
        title: 'Harry Potter Universe Extra Pack',
        date: '2018-03-28T14:00:00+00:00',
        description: 'Accio questions',
        status: 'active',
        logo: 'Bellatrix',
        numQuestions: 100
    },
    {
        id: 'ac0d9aa4-7915-fa52-7215-67488d41a91d',
        title: 'Spells, Charms, and Potions',
        date: '2018-03-28T14:00:00+00:00',
        description: 'Can you brew it?',
        status: 'active',
        logo: 'Dumbledore',
        numQuestions: 100
    },
    {
        id: '56db55ac-58f2-446c-78de-20ecd319285e',
        title: 'Ministry of Magic',
        date: '2018-03-28T14:00:00+00:00',
        description: 'Our beloved leaders',
        status: 'inactive',
        logo: 'Dumbledore',
        numQuestions: 100
    }
];

class CollectionsDashboard extends Component {

    state = {
        collections,
        isOpen: false
    };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };

    handleFormCancel = () => {
        this.setState({ isOpen: false });
    };

    render() {
        return (
            <Grid>
                <Grid.Column width="10">
                    <CollectionsList collections={this.state.collections}/>
                </Grid.Column>
                <Grid.Column width="6">
                    <Button onClick={this.handleFormOpen} positive content="Create Collection"/>
                    {this.state.isOpen && <CollectionForm handleCancel={this.handleFormCancel}/>}
                </Grid.Column>
            </Grid>
        );
    }
}

export default CollectionsDashboard;
