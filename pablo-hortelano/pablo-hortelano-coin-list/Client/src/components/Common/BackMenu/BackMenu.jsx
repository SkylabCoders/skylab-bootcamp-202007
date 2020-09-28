import React from "react";
import { NavLink } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core/";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function BackMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Comeback"
          icon={<KeyboardReturnIcon />}
          component={NavLink}
          to="/"
        />
      </BottomNavigation>
    </>
  );
}

export default BackMenu;
