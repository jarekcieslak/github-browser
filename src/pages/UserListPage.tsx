import { RouteComponentProps } from 'react-router';
import { createStyles, Grid, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';
import { RootState } from '../reducers';
import { connect } from 'react-redux';
import { LoadingStatus, Users } from '../model/model';
import { bindActionCreators } from 'redux';
import * as UsersActions from '../api/api';
import Loading from '../components/Loading';
import Error from '../components/Error';
import UserTable from '../components/UserTable';

export namespace UserListPage {
    export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
        state: Users;
        actions: typeof UsersActions;
    }
}

class UserListPage extends React.Component<UserListPage.Props> {

    componentDidMount(): void {
        this.props.actions.fetchUsers();
    }

    render() {
        const {classes, state, actions} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.header}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                            User List
                        </Typography>
                    </Grid>
                </div>

                <div className={classes.container}>
                    {state.status === LoadingStatus.loading ? (<Loading/>) : ''}
                    {state.status === LoadingStatus.error ? (<Error/>) : ''}
                    {state.status === LoadingStatus.ok ? (<UserTable actions={actions} users={state.data}/>) : ''}
                </div>
                <br/><br/>
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

function mapStateToProps(state: RootState) {
    return {
        state: state.users
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(UsersActions as any, dispatch)
    };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(UserListPage));