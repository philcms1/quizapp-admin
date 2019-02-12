/**
 * Crafted in Erebor by thorin on 2019-02-08
 */
import React from 'react';
import { Table, TableBody, TableRow, TableCell, CircularProgress } from '@material-ui/core';

const collectionsWidget = (props) => {

    // TODO: use Sagas
    if (props.error) {
        return <div>Something went wrong...</div>
    }

    // TODO: customize properly the spinner
    if (props.loading) return (
        <div>
            <CircularProgress color="secondary"/>
        </div>
    );

    return (
        <Table>
            <TableBody>
                {props.collections.map(collection => (
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
};

export default collectionsWidget
