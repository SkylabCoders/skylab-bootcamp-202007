import React from "react";
import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core/";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import "./SubMenu.scss";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function SubMenu(props) {
  const classes = useStyles();

  const [value, setValue] = React.useState(props.changeValue);
  return (
    <>
      <BottomNavigation
        className="big-container__sub-menu"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Your Coins"
          icon={<FormatListBulletedIcon />}
          component={NavLink}
          to="/"
        />
        <BottomNavigationAction
          component={NavLink}
          to="/AddCoin"
          label="Add Coin"
          icon={<AddCircleOutlineIcon />}
        />
        <BottomNavigationAction
          component={NavLink}
          to="/AddMovement"
          className="big-container__sub-menu--third"
          label="Add Move"
          icon={<CreateIcon />}
        />
      </BottomNavigation>
    </>
  );
}

export default SubMenu;
