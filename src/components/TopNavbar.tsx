import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect } from "react";
import SearchComponent from "./Search";
import { useLocation } from "react-router-dom";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import CallIcon from "@mui/icons-material/Call";
import HelpIcon from "@mui/icons-material/Help";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CompareIcon from "@mui/icons-material/Compare";
import HorizontalRule from "@mui/icons-material/HorizontalRule";
import DoorSlidingOutlinedIcon from "@mui/icons-material/DoorSlidingOutlined";
import CampaignIcon from "@mui/icons-material/Campaign";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ReportsMenu from "./ReportsMenu";
import BasicDatePicker from "./DatePicker";
import { useGlobalContext } from "./GlobalVar";

interface TopNavbarProps {
  selectedHeading: string;
}
const helpOptions = [
  {
    value: "Contact Support",
    label: "Contact Support",
  },
  {
    value: "Support Center",
    label: "Support Center",
  },
  {
    value: "Developer Docs",
    label: "Developer Docs",
  },
  {
    value: "Keyboard Shortcuts",
    label: "Keyboard Shortcuts",
  },
  {
    value: "Product Updates",
    label: "Product Updates",
  },
];

const leadOptions = [
  {
    value: "Untouched Leads",
    label: "Untouched Leads",
    icon: <CampaignIcon sx={{ color: "yellow" }} />,
  },
  {
    value: "Leads to call",
    label: "Leads to Call",
    icon: <AccessAlarmIcon sx={{ color: "red" }} />,
  },
  {
    value: "Leads Never Emailed",
    label: "Leads Never Emailed",
    icon: <EmailIcon sx={{ color: "blue" }} />,
  },
  {
    value: "Emails opened this week",
    label: "Email Opened This Week",
    icon: <WatchLaterIcon sx={{ color: "black" }} />,
  },
  {
    value: "No contact > 30 days",
    label: "No Contact > 30 Days",
    icon: <EventAvailableIcon sx={{ color: "brown" }} />,
  },
  {
    value: "Opportunity Follow up",
    label: "Opportunity follow up",
    icon: <EventAvailableIcon sx={{ color: "green" }} />,
  },
];

const compareOptions = [
  {
    value: "Last Week",
    label: "Last Week",
    icon: <AccessAlarmIcon sx={{ color: "red" }} />,
  },
  {
    value: "Same Week Last Month",
    label: "Same Week Last Month",
    icon: <EventAvailableIcon sx={{ color: "blue" }} />,
  },
  {
    value: "Same Week Last Quarter",
    label: "Same Week Last Quarter",
    icon: <WatchLaterIcon sx={{ color: "purple" }} />,
  },
  {
    value: "Same Week Last Year",
    label: "Same Week Last Year",
    icon: <EventAvailableIcon sx={{ color: "green" }} />,
  },
];

const TopNavbar: React.FC<TopNavbarProps> = ({ selectedHeading }) => {
  const location = useLocation();
  const { collapsed } = useGlobalContext();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [leadAnchorEl, setLeadAnchorEl] = useState<null | HTMLElement>(null);
  const [compareAnchorEl, setCompareAnchorEl] = useState<null | HTMLElement>(
    null
  );

  useEffect(() => {
    // Extract the last part of the URL after the last '/'

    console.log(selectedHeading);
    const pathName = location.pathname.split("/").pop() || "";

    // Format the string by adding spaces before uppercase letters and capitalizing the first letter
    const formattedHeading = pathName
      .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
    console.log(formattedHeading);
    if (formattedHeading == " Opportunities") {
      setSelectedItem(" Sales Pipeline");
    }
    if (formattedHeading == " Settings") {
      setSelectedItem(" Settings");
    } else {
      setSelectedItem(formattedHeading);
    } // Update the heading state
  }, [location.pathname, selectedHeading]);

  const [helpAnchorEl, setHelpAnchorEl] = useState<null | HTMLElement>(null);
  const handleLeadClick = (event: React.MouseEvent<HTMLElement>) => {
    setLeadAnchorEl(event.currentTarget);
  };

  const handleCompareClick = (event: React.MouseEvent<HTMLElement>) => {
    setCompareAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setLeadAnchorEl(null);
    setCompareAnchorEl(null);
    setHelpAnchorEl(null);
  };

  const handleMenuItemClick = (value: string) => {
    setSelectedItem(value);
    handleClose();
  };
  const handleHelpClick = (event: React.MouseEvent<HTMLElement>) => {
    setHelpAnchorEl(event.currentTarget);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: collapsed ? `calc(100% - 70px)` : `calc(100% - 280px)`, // Dynamically adjust width
        // Adjust margin left based on sidebar width
        ml: collapsed ? "70px" : "280px",
        backgroundColor: "#fff", // White background
        color: "#000", // Black text color for contrast
        boxShadow: "none",
        overflow: "none",
      }}>
      <Toolbar>
        {/* Search Field */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flex: 1,

            mt: 2,
            mb: 1,
          }}>
          <SearchComponent />
          {/* <GenericTextField
            value={searchQuery}
            onChange={handleSearchChange}
            label="Search"
            startAdornment={<SearchIcon />} // Use search icon at the start
            sx={{ mb: 2, mt: 2, width: "40%", backgroundColor: "#F1F1F1" }} // Add margin-bottom if needed
          /> */}
        </Box>

        {/* Call and Help Icons */}
        <IconButton color="inherit" sx={{ ml: 2 }}>
          <CallIcon />
          <KeyboardArrowDownRoundedIcon />
        </IconButton>
        <IconButton color="inherit" sx={{ ml: 2 }} onClick={handleHelpClick}>
          <HelpIcon />
          <KeyboardArrowDownRoundedIcon />
        </IconButton>
      </Toolbar>

      <Divider sx={{ bgcolor: "#e0e0e0" }} />

      <Toolbar>
        {/* Selected Heading and Actions */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Typography variant="h1">{selectedItem}</Typography>

          {/* Conditionally render AccountOverviewComponent if selectedItem is "Account Overview" */}
          {selectedItem === " Activity Overview" && <ReportsMenu />}
          <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
            <Button
              variant="outlined" // To make it similar to the Typography border
              sx={{
                border: "1px solid black", // Adds the border
                borderRadius: "20px", // Makes the border rounded
                padding: "8px 16px", // Adds padding inside the border (adjust as needed)
                color: "#000", // Sets the text color
                textTransform: "none", // Prevents the button text from being capitalized
              }}>
              Save as...
            </Button>

            <IconButton sx={{ color: "#000" }}>
              <MoreHorizIcon />
            </IconButton>
            <IconButton sx={{ color: "#000" }}>
              <HorizontalRule sx={{ transform: "rotate(90deg)" }} />
            </IconButton>
            <IconButton sx={{ color: "#000" }}>
              <AttachFileIcon sx={{ transform: "rotate(90deg)" }} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>

      <Divider sx={{ bgcolor: "#e0e0e0" }} />

      <Toolbar>
        {/* Filters */}
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <BasicDatePicker />
          <IconButton sx={{ color: "#000" }}>
            <HorizontalRule sx={{ transform: "rotate(90deg)" }} />
          </IconButton>
          <Button
            startIcon={<CompareIcon />}
            sx={{ color: "#000", textTransform: "none", ml: 2 }}
            onClick={handleCompareClick}>
            Compare To
            <KeyboardArrowDownRoundedIcon />
          </Button>
          <Box sx={{ ml: "auto" }}>
            <Button
              startIcon={<CompareIcon />}
              sx={{ color: "#000", textTransform: "none", ml: 2 }}
              onClick={handleLeadClick}>
              All leads
              <KeyboardArrowDownRoundedIcon />
            </Button>
            <Button
              startIcon={<CompareIcon />}
              sx={{ color: "#000", textTransform: "none", ml: 2 }}>
              All Users
              <KeyboardArrowDownRoundedIcon />
            </Button>
            <IconButton sx={{ color: "#000" }}>
              <HorizontalRule sx={{ transform: "rotate(90deg)" }} />
            </IconButton>
            <IconButton sx={{ color: "#000" }}>
              <MenuBookRoundedIcon />
            </IconButton>
            <IconButton sx={{ color: "#000" }}>
              <DoorSlidingOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>

      {/* Menus */}

      <Menu
        anchorEl={leadAnchorEl}
        open={Boolean(leadAnchorEl)}
        onClose={handleClose}>
        {leadOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleMenuItemClick(option.value)}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
      <Menu
        anchorEl={helpAnchorEl}
        open={Boolean(helpAnchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            maxHeight: 400,
            width: 250,
          },
        }}>
        {helpOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleMenuItemClick(option.label)}>
            <ListItemIcon>
              <HelpIcon />{" "}
              {/* Add specific icons for each help option if needed */}
            </ListItemIcon>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>

      <Menu
        anchorEl={compareAnchorEl}
        open={Boolean(compareAnchorEl)}
        onClose={handleClose}>
        {compareOptions.map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleMenuItemClick(option.value)}>
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Menu>
      <Divider sx={{ bgcolor: "#e0e0e0" }} />
    </AppBar>
  );
};

export default TopNavbar;
