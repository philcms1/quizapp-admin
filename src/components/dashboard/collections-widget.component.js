/**
 * Crafted in Erebor by thorin on 2019-02-08
 */
import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';

class collectionsWidget extends Component {
    state = {
        collections: [
            {title: 'Harry Potter Universe', description: 'Do you know magic?', uid: 'a871ebef-45ef-c8af-193b-5134888a2c67'},
            {title: 'Harry Potter Universe Extra Pack', description: 'Accio questions', uid: '24880eb1-cf62-b32b-0542-b6185b4017b3'},
            {title: 'Spells, Charms, and Potions', description: 'Can you brew it?', uid: '56db55ac-58f2-446c-78de-20ecd319285e'},
            {title: 'Ministry of Magic', description: 'Our beloved leaders', uid: '56db55ac-58f2-446c-78de-20ecd319285e'}
        ]
    };

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <Table>
                <TableBody>
                    {this.state.collections.map(collection => (
                        <TableRow key={collection.uid}>
                            <TableCell component="th" scope="row">
                                {collection.title}
                            </TableCell>
                            <TableCell align="right">{collection.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        )
    }
}

export default collectionsWidget
