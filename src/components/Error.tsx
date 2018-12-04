import { withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/es';
import * as React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const styles = (theme: Theme) => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Error(props: any) {
    const {classes} = props;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Error while loading data.
                </Typography>

                <Typography component="p">
                    Data could not be loaded from the server. Try refreshing once again in a while.
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withStyles(styles)(Error);