import { withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/es';
import * as React from 'react';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const styles = (theme: Theme) => ({
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
});

function UserAvatar(props: any) {
    const {classes, url} = props;

    return (
        <Grid container justify="flex-start" alignItems="flex-start">
            <Avatar alt="User avatar" src={url} className={classes.bigAvatar}/>
        </Grid>
    );
}

export default withStyles(styles)(UserAvatar);