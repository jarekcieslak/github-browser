import { RouteComponentProps } from 'react-router';
import { Button, createStyles, Grid, Theme, Typography, withStyles, WithStyles, withWidth } from '@material-ui/core';
import { GithubUser, LoadingStatus, User } from '../model/model';
import * as React from 'react';
import { RootState } from '../reducers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsersActions from '../api/api';
import Loading from '../components/Loading';
import Error from '../components/Error';
import UserInfo from '../components/UserInfo';

export namespace UserDetailsPage {
  export interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
    details: User;
    actions: typeof UsersActions;
    match: any;
  }
}

class UserDetailsPage extends React.Component<UserDetailsPage.Props> {

  componentDidMount(): void {
    const username = this.props.match.params.username;
    if (!!username) {
      this.props.actions.fetchUserDetails(username);
    }
  }

  goBackHome(): void {
    this.props.actions.route('/');
  }

  render() {
    const {classes} = this.props;
    const status = this.props.details.status;
    const details = !!this.props.details.data ? this.props.details.data : {} as GithubUser;

    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              User Details
            </Typography>
            <Button size="small" color="primary" onClick={(event) => this.goBackHome()}>
              Go back to user list
            </Button>
          </Grid>
        </div>

        <div className={classes.container}>
          <Grid item xs={12}>
            {status === LoadingStatus.loading ? (<Loading/>) : ''}
            {status === LoadingStatus.error ? (<Error/>) : ''}
            {status === LoadingStatus.ok ? (<UserInfo details={details}/>) : ''}
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
    details: state.details
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(UsersActions as any, dispatch)
  };
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(withWidth()(UserDetailsPage)));
