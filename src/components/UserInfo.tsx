import { withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/es';
import * as React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@material-ui/core';
import { GithubUserDetails } from '../model/model';
import UserAvatar from './UserAvatar';

const styles = (theme: Theme) => ({
  card: {},
  cta: {
    paddingBottom: '30px',
    paddingTop: '30px'
  },
  media: {
    backgroundPositionY: '30%',
    height: 320,
  },
});

function UserInfo(props: any) {
  const {classes} = props;
  const details: GithubUserDetails = props.details;

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<UserAvatar url={details.avatar_url}/>}
        title={details.login}
        subheader={details.url}
      />

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/collection/190727/1600x900"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {details.name}
          </Typography>
          <Typography component="p">Location: {details.location}</Typography>
          <Typography component="p">Blog: {details.blog}</Typography>
          <Typography component="p">Followers: {details.followers}</Typography>
          <Typography component="p">Following: {details.following}</Typography>
          <Typography component="p">Number of repos: {details.public_repos}</Typography>
          <Typography component="p">Created at: {new Date(details.created_at).toLocaleDateString()}</Typography>
          <Typography component="p">Bio: {details.bio}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cta}>
        <Button variant="contained" size="small" color="primary" href={details.html_url} target="_blank">
          Visit github profile
        </Button>
        <Button size="small" color="primary" href={details.blog} target="_blank">
          Visit blog
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(UserInfo);
