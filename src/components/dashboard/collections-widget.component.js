/**
 * Crafted in Erebor by thorin on 2019-02-08
 */
import React from 'react';
import { Table, TableBody, TableRow, TableCell, CircularProgress } from '@material-ui/core';

const CollectionsWidget = (props) => {

    // TODO: customize properly the error message and extract it to reusable UI component
    if (props.error) {
        return <div>Something went wrong...</div>
    }

    // TODO: customize properly the spinner and extract it to reusable UI component
    if (props.loading) return (
        <div>
            <CircularProgress color="secondary"/>
        </div>
    );

    // TODO: customize properly the no data message and extract it to reusable UI component
    if (props.collections.length === 0) {
        return (
            <div>
                No data to display...
            </div>
        )
    }

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

export default CollectionsWidget
