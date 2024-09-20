import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <>
      <AppBar sx={{ paddingX: { xs: 1, sm: 2 }, marginX: "auto" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "80px", height: "30px", marginTop: "9px" }}
            />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <List>
                  <ListItem
                    component={Link}
                    to="/"
                    onClick={toggleDrawer(false)}
                    sx={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemText primary="Home" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/sign-up-1"
                    onClick={toggleDrawer(false)}
                    sx={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemText primary="Signup" />
                  </ListItem>
                  <ListItem
                    component={Link}
                    to="/login"
                    onClick={toggleDrawer(false)}
                    sx={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemText primary="Login" />
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <div>
              <Button
                sx={{ color: "white", marginRight: 2 }}
                color="inherit"
                component={Link}
                to="/">
                Home
              </Button>
              <Button
                sx={{ color: "white", marginRight: 2 }}
                color="inherit"
                component={Link}
                to="/sign-up-1">
                Signup
              </Button>
              <Button
                sx={{ color: "white" }}
                color="inherit"
                component={Link}
                to="/login">
                Login
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
