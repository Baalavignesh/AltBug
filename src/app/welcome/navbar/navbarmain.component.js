import { Box, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./navbarmain.styles.css";
import SearchIcon from "@mui/icons-material/Search";
import { reactLocalStorage } from "reactjs-localstorage";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";

function NavbarMain() {
  const navigate = useNavigate();

  let logoutUser = () => {
    console.log("user logged out");
    reactLocalStorage.remove("authToken");
    navigate("/login");
  };

  let [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="mainnavbar">
      <div className="navbar-left">
        <h1
          className="mainnav-logo"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          Alt Bug
        </h1>
        <div className="mainnav-search">
          <TextField
            id="standard-full-width"
            label=""
            placeholder="Search Questions"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </div>
      </div>

      <div className="navbar-right">
        <button
          className="mainnav-item"
          onClick={() => navigate("/app/getverified")}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "160px",
              alignItems: "center",
            }}
          >
            Get Verified <VerifiedIcon fontSize="medium" />
          </div>
        </button>
        {/* </Link> */}
        <div>
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}
          >
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={() => navigate('/app/profile')}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={logoutUser}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </div>

        {/* <Link to={"/profile"} style={{ textDecoration: "none" }}>
          <div onClick={logoutUser} className="navbar-profile">
            <AccountCircleIcon fontSize="large" />
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default NavbarMain;
