// TopBar.tsx
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ComputerIcon from "@mui/icons-material/Computer";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import CommentIcon from "@mui/icons-material/Comment";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { FC } from "react";

const TopBar: FC = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1f2e41", width: "100%" }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 0.1 }}>
          SITEJET
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Button sx={{ color: "#909bb1" }}>
            <IconButton sx={{ color: "#909bb1" }}>
              <ComputerIcon />
            </IconButton>
            Manager
          </Button>
          <Button sx={{ color: "#909bb1" }}>
            <IconButton sx={{ color: "#909bb1" }}>
              <AccountBoxIcon />
            </IconButton>
            Templates
          </Button>
          <Button sx={{ color: "#909bb1" }}>
            <IconButton sx={{ color: "#909bb1" }}>
              <PeopleIcon />
            </IconButton>
            Manage Team
          </Button>
          <Button sx={{ color: "#909bb1" }}>
            {" "}
            <IconButton sx={{ color: "#909bb1" }}>
              <QueryStatsIcon />
            </IconButton>
            Stats
          </Button>
        </Box>
        <IconButton sx={{ color: "#909bb1" }}>
          <CommentIcon />
        </IconButton>
        <IconButton sx={{ color: "#909bb1", ml: 1 }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton sx={{ color: "#909bb1", ml: 1 }}>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton sx={{ color: "#909bb1", ml: 1 }}>
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
