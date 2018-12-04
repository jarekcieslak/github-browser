import { bindActionCreators } from 'redux';
import {
    AppBar,
    createStyles,
    Divider,
    Drawer,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Theme,
    Toolbar,
    Typography,
    WithStyles,
    withStyles,
    withWidth
} from '@material-ui/core';
import { WithWidth } from '@material-ui/core/withWidth';
import MenuIcon from '@material-ui/icons/Menu';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import FaceIcon from '@material-ui/icons/Face';
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, RouteComponentProps } from 'react-router';
import { isSmartphone } from './responsive';
import withRoot from './withRoot';
import { history } from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import AboutPage from './pages/AboutPage';
import UserListPage from './pages/UserListPage';
import UserDetailsPage from './pages/UserDetailsPage';
import * as UsersActions from './api/api';

require('./App.css');

export namespace App {
    export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles>, WithWidth {
        actions: typeof UsersActions;
    }

    export interface State {
        drawerOpen: boolean;
    }
}

class App extends React.Component<App.Props, App.State> {

    // Represents menu open/close trigger
    state = {
        drawerOpen: false,
    };

    // Possible routes
    routes = (
        <div className={this.props.classes.content}>
            <Route exact={true} path="/" component={UserListPage}/>
            <Route exact={true} path="/about" component={AboutPage}/>
            <Route exact={true} path="/users" component={UserListPage}/>
            <Route exact={true} path="/users/:username" component={UserDetailsPage}/>
        </div>
    );

    public render() {
        const {width, classes} = this.props;

        // Drawer component
        let drawer = (
            <div style={{height: '100vh'}}>
                <div className={classes.drawerHeader}/>
                <List>
                    <ListItem button onClick={() => history.push('/users')}>
                        <ListItemIcon>
                            <FaceIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListItem button onClick={() => history.push('/about')}>
                        <ListItemIcon>
                            <HelpOutlineIcon/>
                        </ListItemIcon>
                        <ListItemText primary="About"/>
                    </ListItem>
                </List>

            </div>
        );

        // Main component wrapped in Router HOC
        return (
            <ConnectedRouter history={history}>
                <div className={classes.root}>
                    <div className={classes.appFrame}>
                        <AppBar className={classes.appBar}>
                            <Toolbar>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={this.handleDrawerToggle}
                                    className={classes.navIconHide}
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    color="inherit"
                                    noWrap={!isSmartphone(width)}
                                    onClick={(event) => this.goBackHome()}
                                >
                                    Github Browser
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <Hidden mdUp>
                            <Drawer
                                variant="temporary"
                                anchor={'left'}
                                open={this.state.drawerOpen}
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                                onClose={this.handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        <Hidden smDown implementation="css">
                            <Drawer
                                variant="permanent"
                                open
                                classes={{
                                    paper: classes.drawerPaper,
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Hidden>
                        {this.routes}
                    </div>
                </div>
            </ConnectedRouter>
        );
    }

    private handleDrawerToggle = () => {
        this.setState({drawerOpen: !this.state.drawerOpen});

    };

    private goBackHome(): void {
        this.props.actions.route('/');
    }
}

// Material UI styles
const drawerWidth = 240;
const styles = (theme: Theme) => createStyles({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        position: 'absolute',
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    drawerHeader: theme.mixins.toolbar,
    drawerPaper: {
        width: 250,
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    content: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});

// Binds actions to the component props
function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(UsersActions as any, dispatch)
    };
}

export default withRoot(withStyles(styles)(connect(null, mapDispatchToProps)(withWidth()(App))));
