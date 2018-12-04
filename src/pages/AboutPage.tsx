import { RouteComponentProps } from 'react-router';
import { createStyles, Grid, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';

export namespace AboutPage {
    export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
    }
}

class AboutPage extends React.Component<AboutPage.Props> {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.header}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                            About
                        </Typography>
                    </Grid>
                </div>

                <div className={classes.container}>
                    <Grid container spacing={40}>
                        <Grid item xs={4}>
                            <Typography variant="h5">About the app</Typography>
                            <Typography variant="body1">
                                Application was developed mainly in React with TypeScript. Technologies used:<br/>
                            </Typography>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Redux thunk</li>
                                <li>Material UI</li>
                                <li>Typescript</li>
                            </ul>
                            <Typography variant="body1">
                                React + Redux + Typescript was enforced by the project constraints.
                                Material UI was chosen to provide some basic styling and components. Application state
                                was pretty small, but was handled using redux.<br/><br/>
                                <strong>Disclaimer</strong>: Application was developed with TypeScript, but personally
                                I think that React dependencies do not have good typings on npm. If good typescript
                                support is needed then I'd probably use Angular2+. It's fully developed in typescript
                                and it's dependencies tend to have more up to date typings.
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5">Features</Typography>
                            <Typography variant="body1">
                                Create a single page application that displays a list of Github users by using the
                                Github public API
                                with an option to display detailed user data on a separate page.
                                <br/><br/>
                            </Typography>
                            <ul>
                                <li> A list of GitHub users (avatar, login) is displayed.</li>
                                <li> The list should support pagination.</li>
                                <li> Click on the user avatar in the list to see the user details with a back button
                                    to go back to the
                                    initial list of users.
                                </li>
                                <li> Single user page should display the user data after refreshing the page.</li>
                                <li> The web application should be responsive.</li>
                                <li> The project should be delivered as a GitHub repository.</li>
                            </ul>
                        </Grid>

                    </Grid>

                </div>
            </div>
        );
    }
}

const styles = (theme: Theme) => createStyles({
    root: {
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        height: 'auto',
        overflow: 'auto'
    },
    header: {
        paddingTop: 15,
        textAlign: 'left'
    },
    container: {
        textAlign: 'left',
        paddingTop: 15
    }
});
export default withStyles(styles)(connect()(AboutPage));