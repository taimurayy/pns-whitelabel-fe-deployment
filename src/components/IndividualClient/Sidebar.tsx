// Sidebar.tsx
import { Drawer, List, ListItemIcon } from "@mui/material";
import ComputerIcon from "@mui/icons-material/Computer";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import LaunchIcon from "@mui/icons-material/Launch";
import { FC } from "react";

const Sidebar: FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 60,
          boxSizing: "border-box",
          mt: 7,
          zIndex: 1,
          overflow: "hidden",
        },
      }}>
      <List sx={{ ml: 2, mt: 3 }}>
        <ListItemIcon sx={{ mb: 5, color: "#909bb1" }}>
          <ComputerIcon />
        </ListItemIcon>
        <ListItemIcon sx={{ mb: 5, color: "#909bb1" }}>
          <AttachEmailIcon />
        </ListItemIcon>
        <ListItemIcon sx={{ mb: 5, color: "#909bb1" }}>
          <MailOutlineIcon />
        </ListItemIcon>
        <ListItemIcon sx={{ mb: 5, color: "#909bb1" }}>
          <AccessTimeIcon />
        </ListItemIcon>
        <ListItemIcon sx={{ mb: 5, color: "#909bb1" }}>
          <HelpOutlineIcon />
        </ListItemIcon>
        <ListItemIcon sx={{ mb: 5, color: "#909bb1" }}>
          <ChatBubbleOutlineIcon />
        </ListItemIcon>
        <ListItemIcon sx={{ mb: 5, color: "#909bb1" }}>
          <LaunchIcon />
        </ListItemIcon>
      </List>
    </Drawer>
  );
};

export default Sidebar;
