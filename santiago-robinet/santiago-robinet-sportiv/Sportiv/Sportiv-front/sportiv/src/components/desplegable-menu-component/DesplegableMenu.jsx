import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

export default function SimpleMenu() {
  const { user } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logout } = useAuth0();

  const styleMenu = {
    width: 200,
    top: 38,
  };



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseLogout = () => {
    setAnchorEl(null);
    logout({ returnTo: "http://localhost:3000" });
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img className="nav-profile" src={user.picture} alt="profile-button" />
      </Button>
      <Menu
        style={styleMenu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink to="/profile" className="profile-link"><MenuItem onClick={handleClose}>Profile</MenuItem></NavLink>
        <MenuItem onClick={handleCloseLogout}> Logout</MenuItem>
      </Menu>
    </div>
  );
}
