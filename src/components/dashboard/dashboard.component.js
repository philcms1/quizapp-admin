/**
 * Crafted in Erebor by thorin on 2019-02-08
 */
import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

import CollectionsWidget from './collections-widget.component';

class Dashboard extends Component {
    componentDidMount() {
        this.props.initCollections();
    }

    render() {
        return (
            <Grid container spacing={16}>
                <Grid item xs={12}>
                    <Paper>
                        <CollectionsWidget
                            collections={this.props.collections}
                            loading={this.props.isLoadingCollections}
                            error={this.props.loadingCollectionsError}
                        />
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default Dashboard
