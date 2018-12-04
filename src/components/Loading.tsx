import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Theme } from '@material-ui/core/es';
import * as React from 'react';

const styles = (theme: Theme) => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

function Loading(props: any) {
    const {classes} = props;
    return (
        <div>
            <CircularProgress className={classes.progress}/>
        </div>
    );
}

export default withStyles(styles)(Loading);