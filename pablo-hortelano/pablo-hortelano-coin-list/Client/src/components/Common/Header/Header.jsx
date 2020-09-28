import React from "react";
import LogOut from "../../LogOut/LogOut";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import "./Header.scss";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function Header() {
  const { isAuthenticated } = useAuth0();
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink
          to={{
            pathname: "/",
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Landing"} />
          </ListItem>
        </NavLink>
      </List>
      <List>
        <NavLink
          to={{
            pathname: "/Profile",
          }}
        >
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <MeetingRoomIcon />
          </ListItemIcon>
          <LogOut />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    (isAuthenticated && (
      <>
        <div></div>
        <div className={classes.root}>
          <AppBar position="static" className="test">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h6" className={classes.title}>
                CoinList
              </Typography>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    onClick={toggleDrawer(anchor, true)}
                    className="header__button"
                  >
                    MENU
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </Toolbar>
          </AppBar>
        </div>
      </>
    )) || (
      <>
        <div></div>
        <div className={classes.root}>
          <AppBar position="static" className="test">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h6" className={classes.title}>
                CoinList
              </Typography>
              {["right"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </Toolbar>
          </AppBar>
        </div>
      </>
    )
  );
}
