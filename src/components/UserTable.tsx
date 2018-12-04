import {
    createStyles,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Theme,
    Typography,
    WithStyles,
    withStyles
} from '@material-ui/core';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import * as React from 'react';
import * as UsersActions from '../api/api';
import { GithubUser } from '../model/model';
import Avatar from './UserAvatar';

export namespace UserTable {
    export interface Props extends WithStyles<typeof styles> {
        users: GithubUser[];
        actions: typeof UsersActions;
    }

    export interface State {
        order: string;
        orderBy: string;
        page: number;
        rowsPerPage: number;
    }
}

class UserTable extends React.Component<UserTable.Props, UserTable.State> {

    state = {
        order: 'asc',
        orderBy: 'calories',
        page: 0,
        rowsPerPage: 10,
    };

    onRowClick(user: GithubUser) {
        this.props.actions.route('/users/' + user.login);
    }

    handleRequestSort = (event: any, property: any) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({order, orderBy});
    };

    handleChangePage = (event: any, page: any) => {
        this.setState({page});
    };

    handleChangeRowsPerPage = (event: any) => {
        this.setState({rowsPerPage: event.target.value});
    };

    render() {
        const {classes} = this.props;
        const data = !!this.props.users ? this.props.users : [];
        const {rowsPerPage, page} = this.state;

        return (
            <Paper className={classes.paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="dense">Avatar</TableCell>
                            <TableCell padding="dense">Login</TableCell>
                            <TableCell padding="dense">More</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(user => {
                                return (
                                    <TableRow
                                        key={user.id}
                                        hover
                                        onClick={event => this.onRowClick(user)}
                                    >
                                        <TableCell padding="dense"><Avatar url={user.avatar_url}/></TableCell>
                                        <TableCell padding="dense">
                                            <Typography variant="h6">
                                                {user.login}
                                            </Typography>
                                        </TableCell>
                                        <TableCell padding="dense">
                                            <IconButton
                                                aria-label="Delete"
                                                color="default"
                                                onClick={() => this.props.actions}
                                            >
                                                <ArrowIcon/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
}

const styles = (theme: Theme) => createStyles({
    paper: {
        width: '100%',
        minWidth: 260,
        display: 'inline-block'
    },
    table: {
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer'
    },
});

export default withStyles(styles)(UserTable);