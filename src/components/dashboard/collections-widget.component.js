/**
 * Crafted in Erebor by thorin on 2019-02-08
 */
import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableCell, CircularProgress } from '@material-ui/core';

class CollectionsWidget extends Component {
    state = {
        collections: [
            {title: 'Harry Potter Universe', description: 'Do you know magic?', uid: 'a871ebef-45ef-c8af-193b-5134888a2c67'},
            {title: 'Harry Potter Universe Extra Pack', description: 'Accio questions', uid: '24880eb1-cf62-b32b-0542-b6185b4017b3'},
            {title: 'Spells, Charms, and Potions', description: 'Can you brew it?', uid: 'ac0d9aa4-7915-fa52-7215-67488d41a91d'},
            {title: 'Ministry of Magic', description: 'Our beloved leaders', uid: '56db55ac-58f2-446c-78de-20ecd319285e'}
        ]
    };

    componentDidMount() {
        this.props.initCollections();
    }

    render() {
        // const { data, loading, error } = this.props.collections;

        // TODO: use Sagas
        if (this.props.error) {
            return <div>Something went wrong...</div>
        }

        // TODO: customize properly the spinner
        if (this.props.loading) return (
            <div>
                <CircularProgress color="secondary"/>
            </div>
        );

        return (
            <Table>
                <TableBody>
                    {this.props.collections.map(collection => (
                        <TableRow key={collection.uid}>
                            <TableCell component="th" scope="row">
                                {collection.title.find(title => title.lang === 'en').text}
                            </TableCell>
                            <TableCell align="right">{collection.description.find(desc => desc.lang === 'en').text}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

export default CollectionsWidget
