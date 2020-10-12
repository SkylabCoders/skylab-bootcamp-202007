import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import NoAuthorized from "../Common/NoAuthorized/NoAuthorized";
import { Avatar } from "@material-ui/core/";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Button, CircularProgress } from "@material-ui/core";
import "./Profile.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (isLoading) {
    return (
      <center>
        <>
          <CircularProgress color="secondary" />
        </>
      </center>
    );
  }
  console.log(user);
  return (
    (isAuthenticated && (
      <section className="profile-container">
        <div className="profile-container__avatar">
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  {user.name[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={user.name[0].toUpperCase() + user.name.substring(1)}
              subheader={new Date().toISOString().substring(0, 10)}
            />
            <CardMedia
              className={classes.media}
              image={user.picture}
              title="Paella dish"
            />
            <CardContent></CardContent>
            <CardActions disableSpacing>
              {/*               <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton> */}
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Standard user
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>

        <div className="profile-container__rest">
          <Card>
            <CardHeader title="User Details"></CardHeader>
            <CardContent>
              Username: {user.name[0].toUpperCase() + user.name.substring(1)}
            </CardContent>
            <CardContent>Mail: {user.email}</CardContent>
          </Card>
          <Card>
            <CardHeader title="Upgrade your account"></CardHeader>
            <CardContent>
              <Button>Upgrade</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )) || <NoAuthorized />
  );
};

export default Profile;
