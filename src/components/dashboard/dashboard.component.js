/**
 * Crafted in Erebor by thorin on 2019-02-08
 */
import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

import CollectionsWidget from './collections-widget.container';

class Dashboard extends Component {
    render() {
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Paper>
                        <CollectionsWidget />
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Dashboard
