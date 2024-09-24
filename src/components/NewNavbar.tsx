// import React, { useState } from "react";
// import {
//   Drawer,
//   List,
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   Avatar,
//   Divider,
//   Badge,
//   IconButton,
//   Collapse,
//   ListItemButton,
//   Box,
// } from "@mui/material";
// import { useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
// import KeyboardTabRoundedIcon from "@mui/icons-material/KeyboardTabRounded";
// import DoorSlidingOutlinedIcon from "@mui/icons-material/DoorSlidingOutlined";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import PowerIcon from "@mui/icons-material/Power";
// import SearchIcon from "@mui/icons-material/Search";
// import InboxIcon from "@mui/icons-material/Inbox";
// import MailIcon from "@mui/icons-material/Mail";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import PeopleIcon from "@mui/icons-material/People";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import ReportIcon from "@mui/icons-material/BarChart";
// import SettingsIcon from "@mui/icons-material/Settings";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import CampaignIcon from "@mui/icons-material/Campaign";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
// import EmailIcon from "@mui/icons-material/Email";
// import WatchLaterIcon from "@mui/icons-material/WatchLater";
// import EventAvailableIcon from "@mui/icons-material/EventAvailable";

// interface SidebarProps {
//   onSelectionChange: (heading: string) => void;
// }
// const Sidebar: React.FC<SidebarProps> = ({ onSelectionChange }) => {
//   const location = useLocation();

//   useEffect(() => {
//     // Extract the last part of the URL after the last '/'

//     const pathName = location.pathname.split("/").pop() || "";

//     // Format the string by adding spaces before uppercase letters and capitalizing the first letter
//     const formattedHeading = pathName
//       .replace(/([A-Z])/g, " $1") // Add space before uppercase letters
//       .replace(/^./, (str) => str.toUpperCase())
//       .trim(); // Capitalize the first letter
//     if (formattedHeading == " Opportunities") {
//       onSelectionChange(formattedHeading);
//       console.log("hehe");
//       setSelectedItem("Sales Pipeline");
//     } else if (formattedHeading == " Settings") {
//       onSelectionChange(formattedHeading);
//       setSelectedItem("Settings");
//     } else {
//       setSelectedItem(formattedHeading);
//     } // Update the heading state
//   }, [location.pathname]);
//   const navigate = useNavigate();
//   const drawerWidth = 280;
//   const [openReports, setOpenReports] = useState(false);
//   const getMenuItemStyles = (heading: string) => {
//     // Example additional condition
//     const isSomeOtherConditionMet = true; // Replace with your actual condition

//     return {
//       color:
//         selectedItem === heading
//           ? "yellow" // color for selected item
//           : isSomeOtherConditionMet
//           ? "white" // color for non-selected items when condition is met
//           : "#797979", // color for non-selected items when condition is not met
//     };
//   };

//   const handleToggleReports = () => {
//     handleMenuItemClick("Reports");
//     setOpenReports(!openReports);
//   };
//   const [selectedItem, setSelectedItem] = useState<string | null>(null);
//   const handleMenuItemClick = (heading: string) => {
//     setSelectedItem(heading);
//     console.log(heading);

//     onSelectionChange(heading);
//     if (heading === "Activity Overview") {
//       console.log(heading);
//       getMenuItemStyles(heading);
//       navigate("/Reports/ActivityOverview");
//     } else if (heading === "Opportunities") {
//       getMenuItemStyles(heading);
//       setSelectedItem("Sales & Pipelines");
//       navigate("/Opportunities");
//     } else if (heading === "Settings") {
//       getMenuItemStyles(heading);
//       navigate("/Settings");
//     } else if (heading === "Reports") {
//       getMenuItemStyles(heading);
//       return;
//     }
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//           backgroundColor: "#111",
//           color: "#fff",
//           display: "flex",
//           flexDirection: "column",
//         },
//       }}>
//       {/* User Profile Section */}
//       <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
//         <Avatar sx={{ bgcolor: "#d32f2f", marginRight: 2 }}>BH</Avatar>
//         <Box>
//           <Typography variant="body1" sx={{ fontWeight: 500 }}>
//             Brock Hudgens
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#aaa" }}>
//             HRDLS
//           </Typography>
//         </Box>
//         <IconButton sx={{ marginLeft: "auto", color: "#fff" }}>
//           <ExpandMoreIcon />
//         </IconButton>
//       </Box>

//       {/* Main Sections */}
//       <Box sx={{ flex: 1, backgroundColor: "#191919" }}>
//         <List>
//           <ListItemButton
//             sx={{ marginBottom: -2, ...getMenuItemStyles("Inbox") }}
//             onClick={() => handleMenuItemClick("Inbox")}>
//             <ListItemIcon>
//               <Badge
//                 badgeContent={4}
//                 color="primary"
//                 sx={{
//                   ".MuiBadge-dot": {
//                     backgroundColor: "green", // Color of the badge dot
//                   },
//                   ".MuiBadge-standard": {
//                     backgroundColor: "green", // Color of the badge background (if you want to change it)
//                   },
//                 }}>
//                 <InboxIcon sx={{ color: "#fff" }} />
//               </Badge>
//             </ListItemIcon>
//             <ListItemText
//               primary="Inbox"
//               primaryTypographyProps={{
//                 sx: { fontSize: "1rem" }, // Adjusted to a lighter shade
//               }}
//             />
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2, ...getMenuItemStyles("Opportunities") }}
//             onClick={() => handleMenuItemClick("Opportunities")}>
//             <ListItemIcon>
//               <TrendingUpIcon sx={{ color: "#fff" }} />
//             </ListItemIcon>
//             <ListItemText
//               primary="Opportunities"
//               primaryTypographyProps={{
//                 sx: { fontSize: "1rem" }, // Adjusted to a lighter shade
//               }}
//             />
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2, ...getMenuItemStyles("Leads") }}
//             onClick={() => handleMenuItemClick("Leads")}>
//             <ListItemIcon>
//               <PeopleIcon sx={{ color: "#fff" }} />
//             </ListItemIcon>
//             <ListItemText
//               primary="Leads"
//               primaryTypographyProps={{
//                 sx: { fontSize: "1rem" }, // Adjusted to a lighter shade
//               }}
//             />
//             <IconButton sx={{ color: "#fff" }}>
//               <AddCircleOutlineIcon />
//             </IconButton>
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2, ...getMenuItemStyles("Contacts") }}
//             onClick={() => handleMenuItemClick("Contacts")}>
//             <ListItemIcon>
//               <MailIcon sx={{ color: "#fff" }} />
//             </ListItemIcon>
//             <ListItemText
//               primary="Contacts"
//               primaryTypographyProps={{
//                 sx: { fontSize: "1rem" }, // Adjusted to a lighter shade
//               }}
//             />
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2, ...getMenuItemStyles("Workflows") }}
//             onClick={() => handleMenuItemClick("Workflows")}>
//             <ListItemIcon>
//               <WorkOutlineIcon sx={{ color: "#fff" }} />
//             </ListItemIcon>
//             <ListItemText
//               primary="Workflows"
//               primaryTypographyProps={{
//                 sx: { fontSize: "1rem" }, // Adjusted to a lighter shade
//               }}
//             />
//             <IconButton sx={{ color: "#fff" }}>
//               <AddCircleOutlineIcon />
//             </IconButton>
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2, ...getMenuItemStyles("Conversations") }}
//             onClick={() => handleMenuItemClick("Conversations")}>
//             <ListItemIcon>
//               <MailIcon sx={{ color: "#fff" }} />
//             </ListItemIcon>
//             <ListItemText
//               primary="Conversations"
//               primaryTypographyProps={{
//                 sx: { fontSize: "1rem" }, // Adjusted to a lighter shade
//               }}
//             />
//           </ListItemButton>
//         </List>

//         {/* Reports Section */}
//         <Box>
//           <ListItemButton
//             sx={{
//               // Light grey border when selected

//               marginBottom: -2,
//               ...getMenuItemStyles("Reports"),
//             }}
//             onClick={handleToggleReports}>
//             <ListItemIcon>
//               <ReportIcon sx={{ color: "#fff" }} />
//             </ListItemIcon>
//             <ListItemText primary="Reports" />
//           </ListItemButton>
//           <Collapse in={openReports} timeout="auto" unmountOnExit>
//             <List component="div" disablePadding sx={{ marginLeft: "-15px" }}>
//               <ListItemButton
//                 sx={{
//                   pl: 4,
//                   marginBottom: -2,
//                   ...getMenuItemStyles("Activity Overview"),
//                 }}
//                 onClick={() => handleMenuItemClick("Activity Overview")}>
//                 <ListItemIcon>
//                   <SubdirectoryArrowRightIcon sx={{ color: "#797979" }} />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Activity Overview"
//                   primaryTypographyProps={{
//                     sx: {
//                       color: "#797979",
//                     }, // Adjusted to a lighter shade
//                   }}
//                 />
//               </ListItemButton>
//               <ListItemButton
//                 sx={{ pl: 4, marginBottom: -2 }}
//                 onClick={() => handleMenuItemClick("Activity Comparison")}>
//                 <ListItemIcon>
//                   <SubdirectoryArrowRightIcon sx={{ color: "#797979" }} />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Activity Comparison"
//                   primaryTypographyProps={{
//                     sx: { color: "#797979" }, // Adjusted to a lighter shade
//                   }}
//                 />
//               </ListItemButton>
//               <ListItemButton
//                 sx={{ pl: 4, marginBottom: -2 }}
//                 onClick={() => handleMenuItemClick("Opportunity Funnels")}>
//                 <ListItemIcon>
//                   <SubdirectoryArrowRightIcon sx={{ color: "#797979" }} />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Opportunity Funnels"
//                   primaryTypographyProps={{
//                     sx: { color: "#797979" }, // Adjusted to a lighter shade
//                   }}
//                 />
//               </ListItemButton>
//               <ListItemButton
//                 sx={{ pl: 4, marginBottom: -2 }}
//                 onClick={() => handleMenuItemClick("Status changes")}>
//                 <ListItemIcon>
//                   <SubdirectoryArrowRightIcon sx={{ color: "#797979" }} />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Status changes"
//                   primaryTypographyProps={{
//                     sx: { color: "#797979" }, // Adjusted to a lighter shade
//                   }}
//                 />
//               </ListItemButton>
//               <ListItemButton
//                 sx={{ pl: 4, marginBottom: -2 }}
//                 onClick={() => handleMenuItemClick("Explorer")}>
//                 <ListItemIcon>
//                   <SubdirectoryArrowRightIcon sx={{ color: "#797979" }} />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Explorer"
//                   primaryTypographyProps={{
//                     sx: { color: "#797979" }, // Adjusted to a lighter shade
//                   }}
//                 />
//               </ListItemButton>
//               <ListItemButton
//                 sx={{ pl: 4, marginBottom: -2 }}
//                 onClick={() => handleMenuItemClick("Sent Emails")}>
//                 <ListItemIcon>
//                   <SubdirectoryArrowRightIcon sx={{ color: "#797979" }} />
//                 </ListItemIcon>
//                 <ListItemText
//                   primary="Sent Email"
//                   primaryTypographyProps={{
//                     sx: { color: "#797979" }, // Adjusted to a lighter shade
//                   }}
//                 />
//               </ListItemButton>
//             </List>
//           </Collapse>
//         </Box>

//         <Divider sx={{ backgroundColor: "white", marginTop: 2 }} />

//         {/* Smart Views Section */}
//         <List>
//           <ListItemButton sx={{ marginBottom: -2 }}>
//             <ListItemText
//               primary="SMART VIEWS"
//               onClick={() => handleMenuItemClick("Smart Leads")}
//               primaryTypographyProps={{
//                 sx: { color: "#aaa" },
//               }}
//             />
//             <IconButton>
//               <SearchIcon sx={{ color: "#fff" }} />
//             </IconButton>
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2 }}
//             onClick={() => handleMenuItemClick("Untouched Leads")}>
//             <ListItemIcon>
//               <DoorSlidingOutlinedIcon sx={{ color: "white" }} />
//             </ListItemIcon>
//             <ListItemIcon>
//               <CampaignIcon sx={{ color: "yellow", marginLeft: "-17px" }} />
//             </ListItemIcon>
//             <ListItemText
//               primary="Untouched Leads"
//               primaryTypographyProps={{
//                 sx: { color: "#797979", fontSize: "0.9rem" }, // Adjusted to a lighter shade
//               }}
//               sx={{
//                 marginLeft: "-34px",
//               }}
//             />
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2 }}
//             onClick={() => handleMenuItemClick("Leads to call")}>
//             <ListItemIcon>
//               <DoorSlidingOutlinedIcon sx={{ color: "white" }} />
//             </ListItemIcon>
//             <ListItemIcon>
//               <AccessAlarmIcon sx={{ color: "red", marginLeft: "-17px" }} />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 sx: { color: "#797979", fontSize: "0.9rem" }, // Adjusted to a lighter shade
//               }}
//               primary="Leads to Call"
//               sx={{ marginLeft: "-34px" }}
//             />
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2 }}
//             onClick={() => handleMenuItemClick("Leads Never Emailed")}>
//             <ListItemIcon>
//               <DoorSlidingOutlinedIcon sx={{ color: "white" }} />
//             </ListItemIcon>
//             <ListItemIcon>
//               <EmailIcon sx={{ color: "blue", marginLeft: "-17px" }} />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 sx: { color: "#797979", fontSize: "0.9rem" }, // Adjusted to a lighter shade
//               }}
//               primary="Leads Never Emailed"
//               sx={{ marginLeft: "-34px" }}
//             />
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2 }}
//             onClick={() => handleMenuItemClick("Emails opened this week")}>
//             <ListItemIcon>
//               <DoorSlidingOutlinedIcon sx={{ color: "white" }} />
//             </ListItemIcon>
//             <ListItemIcon>
//               <WatchLaterIcon sx={{ color: "#fff", marginLeft: "-17px" }} />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 sx: { color: "#797979", fontSize: "0.9rem" }, // Adjusted to a lighter shade
//               }}
//               primary="Email Opened This Week"
//               sx={{ marginLeft: "-34px" }}
//             />
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2 }}
//             onClick={() => handleMenuItemClick("No contact > 30 days")}>
//             <ListItemIcon>
//               <DoorSlidingOutlinedIcon sx={{ color: "white" }} />
//             </ListItemIcon>
//             <ListItemIcon>
//               <EventAvailableIcon
//                 sx={{ color: "brown", marginLeft: "-17px" }}
//               />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 sx: { color: "#797979", fontSize: "0.9rem" }, // Adjusted to a lighter shade
//               }}
//               primary="No Contact > 30 Days"
//               sx={{ marginLeft: "-34px" }}
//             />
//           </ListItemButton>
//           <ListItemButton
//             onClick={() => handleMenuItemClick("Opportunity Follow up")}>
//             <ListItemIcon>
//               <DoorSlidingOutlinedIcon sx={{ color: "white" }} />
//             </ListItemIcon>
//             <ListItemIcon>
//               <EventAvailableIcon
//                 sx={{ color: "green", marginLeft: "-17px" }}
//               />
//             </ListItemIcon>
//             <ListItemText
//               primaryTypographyProps={{
//                 sx: { color: "#797979" },
//                 fontSize: "0.9rem", // Adjusted to a lighter shade
//               }}
//               primary="Oppurtunity follow up"
//               sx={{ marginLeft: "-34px", fontWeight: "light" }}
//             />
//           </ListItemButton>
//         </List>

//         <Divider sx={{ backgroundColor: "white" }} />

//         {/* Bottom Section */}
//         <List>
//           <ListItemButton
//             sx={{ marginBottom: -2 }}
//             onClick={() => handleMenuItemClick("Support & Faqs")}>
//             <ListItemIcon>
//               <SupportAgentIcon sx={{ color: "#fff" }} />
//             </ListItemIcon>
//             <ListItemText primary="Support & FAQs" />
//             <IconButton>
//               <OpenInNewIcon sx={{ color: "#fff" }} />
//             </IconButton>
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: -2 }}
//             onClick={() => handleMenuItemClick("Integrations")}>
//             <ListItemIcon>
//               <PowerIcon sx={{ color: "#fff" }} />
//             </ListItemIcon>
//             <ListItemText primary="Integrations" />
//           </ListItemButton>
//           <ListItemButton
//             sx={{ marginBottom: 10, ...getMenuItemStyles("Settings") }}
//             onClick={() => handleMenuItemClick("Settings")}>
//             <ListItemIcon>
//               <SettingsIcon sx={{ color: "#fff" }} />
//             </ListItemIcon>
//             <ListItemText primary="Settings" />
//           </ListItemButton>
//         </List>

//         <Divider sx={{ backgroundColor: "white" }} />

//         {/* Collapse Button */}
//         <ListItemButton>
//           <ListItemText primary="Collapse" />
//           <ListItemIcon>
//             <KeyboardTabRoundedIcon
//               sx={{
//                 color: "#fff",
//                 transform: "scaleX(-1)",
//                 marginLeft: "24px",
//               }}
//             />
//           </ListItemIcon>
//         </ListItemButton>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect } from "react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Divider,
  Badge,
  IconButton,
  Collapse,
  ListItemButton,
  Box,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  SubdirectoryArrowRight as SubdirectoryArrowRightIcon,
  KeyboardTabRounded as KeyboardTabRoundedIcon,
  OpenInNew as OpenInNewIcon,
  Power as PowerIcon,
  Search as SearchIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
  TrendingUp as TrendingUpIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  People as PeopleIcon,
  WorkOutline as WorkOutlineIcon,
  BarChart as ReportIcon,
  Settings as SettingsIcon,
  SupportAgent as SupportAgentIcon,
  ExpandMore as ExpandMoreIcon,
  Campaign as CampaignIcon,
  AccessAlarm as AccessAlarmIcon,
  Email as EmailIcon,
  WatchLater as WatchLaterIcon,
  EventAvailable as EventAvailableIcon,
} from "@mui/icons-material";

import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import DragIndicatorRoundedIcon from "@mui/icons-material/DragIndicatorRounded";
import { useGlobalContext } from "./GlobalVar";
interface SidebarProps {
  onSelectionChange: (heading: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectionChange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const drawerWidth = 280;

  const [openReports, setOpenReports] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { collapsed, setCollapsed } = useGlobalContext();

  useEffect(() => {
    const pathName = location.pathname.split("/").pop() || "";
    const formattedHeading = pathName
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();

    if (formattedHeading === " Opportunities") {
      onSelectionChange(formattedHeading);
      setSelectedItem("Sales Pipeline");
    } else if (formattedHeading === "Settings") {
      onSelectionChange(formattedHeading);
      setSelectedItem("Settings");
    } else {
      setSelectedItem(formattedHeading);
    }
  }, [location.pathname, onSelectionChange]);

  const getMenuItemStyles = (heading: string) => ({
    color: selectedItem === heading ? "yellow" : "#797979",
  });

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed); // Toggle the collapse state
    const reducedwidth = 70;
    localStorage.setItem("width", reducedwidth.toString());
  };
  const getIconColor = (heading: string) =>
    selectedItem === heading ? "yellow" : "#fff";

  const handleMenuItemClick = (heading: string) => {
    setSelectedItem(heading);
    onSelectionChange(heading);

    const routes: Record<string, string> = {
      "Activity Overview": "/Reports/ActivityOverview",
      Opportunities: "/Opportunities",
      Settings: "/Settings",
      Inbox:"/processing",
      Reports: "/Reports/ActivityOverview",
      Leads: "/Leads",
      Contacts: "/Contacts",
      Conversations: "/processing",
      Workflows: "/processing",
      "Activity Comparison": "/processing",
      "Opportunity Funnels": "/processing",
      "Status Changes": "/processing",
      Explorer: "/processing",
      "Sent Emails": "/processing",
      Integrations: "/processing",
      "Support & Faqs": "/processing",
      "Untouched Leads": "/processing",
      "Leads to Call": "/processing",
      "Leads Never Emailed": "/processing",
      "Emails opened this week": "/processing",
      "No contact > 30 days": "/processing",
      "Opportunity Follow up": "/processing",
      logout: "/",
    };

    if (routes[heading]) {
      navigate(routes[heading]);
    }
  };

  const handleToggleReports = () => {
    setOpenReports(!openReports);
    handleMenuItemClick("Reports");
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: collapsed ? 70 : drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: collapsed ? 70 : drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#111",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
        },
      }}>
      {/* User Profile Section */}
      <Box sx={{ padding: 2, display: "flex", alignItems: "center" }}>
        <Avatar
          sx={{
            bgcolor: "#d32f2f",
            marginRight: collapsed ? 0 : 2,
            marginLeft: collapsed ? -0.5 : 0,
          }}>
          BH
        </Avatar>
        {!collapsed && (
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              Brock Hudgens
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              HRDLS
            </Typography>
          </Box>
        )}
        {!collapsed && (
          <IconButton sx={{ marginLeft: "auto", color: "#fff" }}>
            <ExpandMoreIcon />
          </IconButton>
        )}
      </Box>

      {/* Main Sections */}
      <Box sx={{ flex: 1, backgroundColor: "#191919" }}>
        <List>
          {[
            {
              text: "Inbox",
              icon: <InboxIcon sx={{ color: getIconColor("Inbox") }} />,
              badgeContent: 4,
            },
            {
              text: "Opportunities",
              icon: (
                <TrendingUpIcon sx={{ color: getIconColor("Opportunities") }} />
              ),
            },
            {
              text: "Leads",
              icon: <PeopleIcon sx={{ color: getIconColor("Leads") }} />,
              actionIcon: <AddCircleOutlineIcon />,
            },
            {
              text: "Contacts",
              icon: <MailIcon sx={{ color: getIconColor("Contacts") }} />,
            },
            {
              text: "Workflows",
              icon: (
                <WorkOutlineIcon sx={{ color: getIconColor("Workflows") }} />
              ),
              actionIcon: <AddCircleOutlineIcon />,
            },
            {
              text: "Conversations",
              icon: <MailIcon sx={{ color: getIconColor("Conversations") }} />,
            },
          ].map(({ text, icon, badgeContent, actionIcon }) => (
            <ListItemButton
              key={text}
              sx={{
                marginBottom: -2,
                ...getMenuItemStyles(text),
              }}
              onClick={() => handleMenuItemClick(text)}>
              <ListItemIcon>
                {badgeContent ? (
                  <Badge
                    badgeContent={badgeContent}
                    color="primary"
                    sx={{
                      ".MuiBadge-dot": { backgroundColor: "green" },
                      ".MuiBadge-standard": { backgroundColor: "green" },
                    }}>
                    {icon}
                  </Badge>
                ) : (
                  icon
                )}
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    sx: { fontSize: "1rem", color: getIconColor(text) },
                  }}
                />
              )}
              {actionIcon && (
                <IconButton sx={{ color: "#fff" }}>{actionIcon}</IconButton>
              )}
            </ListItemButton>
          ))}
        </List>
        {/* Reports Section */}
        <Box>
          <ListItemButton
            sx={{
              marginBottom: -2,

              ...getMenuItemStyles("Reports"),
            }}
            onClick={handleToggleReports}>
            <ListItemIcon>
              <ReportIcon sx={{ color: "white" }} />
            </ListItemIcon>
            {!collapsed && (
              <ListItemText
                primary="Reports"
                sx={{ color: getIconColor("Reports") }}
              />
            )}
            <ListItemIcon>
              <ArrowDropDownRoundedIcon
                sx={{ color: "white", ml: "auto", mr: 1 }}
              />
            </ListItemIcon>
          </ListItemButton>
          <Collapse in={openReports} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ marginLeft: "-15px" }}>
              {[
                "Activity Overview",
                "Activity Comparison",
                "Opportunity Funnels",
                "Status changes",
                "Explorer",
                "Sent Emails",
              ].map((item) => (
                <ListItemButton
                  key={item}
                  sx={{ pl: 4, marginBottom: -2, ...getMenuItemStyles(item) }}
                  onClick={() => handleMenuItemClick(item)}>
                  <ListItemIcon>
                    <SubdirectoryArrowRightIcon
                      sx={{ color: getIconColor(item) }}
                    />
                  </ListItemIcon>
                  {!collapsed && (
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        color: selectedItem === item ? "yellow" : "#797979",
                      }}
                    />
                  )}
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </Box>
        <Divider sx={{ backgroundColor: "white", marginTop: 2 }} />
        {/* Smart Views Section */}
        <List sx={{ mb: 10 }}>
          <ListItemButton sx={{ marginBottom: -2 }}>
            {!collapsed && (
              <ListItemText
                primary="SMART VIEWS"
                onClick={() => handleMenuItemClick("Smart Leads")}
                primaryTypographyProps={{
                  sx: { color: "#aaa" },
                }}
              />
            )}{" "}
            {!collapsed && (
              <IconButton>
                <SearchIcon sx={{ color: "#fff" }} />
              </IconButton>
            )}
          </ListItemButton>
          {[
            {
              text: "Untouched Leads",
              icon: <CampaignIcon sx={{ color: "green" }} />,
            },
            {
              text: "Leads to Call",
              icon: <AccessAlarmIcon sx={{ color: "yellow" }} />,
            },
            {
              text: "Leads Never Emailed",
              icon: <EmailIcon sx={{ color: "red" }} />,
            },
            {
              text: "Emails opened this week",
              icon: <WatchLaterIcon sx={{ color: "blue" }} />,
            },
            {
              text: "No contact > 30 days",
              icon: <EventAvailableIcon sx={{ color: "pink" }} />,
            },
            {
              text: "Opportunity Follow up",
              icon: (
                <EventAvailableIcon
                  sx={{ color: getIconColor("Opportunity Follow up") }}
                />
              ),
            },
          ].map(({ text, icon }) => (
            <ListItemButton
              key={text}
              onClick={() => handleMenuItemClick(text)}
              sx={{ marginBottom: -2 }}>
              <ListItemIcon sx={{ mr: -3 }}>
                {!collapsed && (
                  <DragIndicatorRoundedIcon sx={{ color: "white" }} />
                )}
              </ListItemIcon>
              <ListItemIcon
                sx={{ mr: collapsed ? 0 : -3, ml: collapsed ? -4 : 0 }}>
                {icon}
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary={text}
                  sx={{ color: selectedItem === text ? "yellow" : "#797979" }}
                />
              )}
            </ListItemButton>
          ))}
        </List>
        {/* Settings Section */}

        <Divider sx={{ backgroundColor: "white", mt: -2, mb: 2 }} />
        <List sx={{ mt: -3 }}>
          <ListItemButton
            sx={{ marginBottom: -2 }}
            onClick={() => handleMenuItemClick("Support & Faqs")}>
            <ListItemIcon>
              <SupportAgentIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Support & FAQs" />}
            <IconButton>
              <OpenInNewIcon sx={{ color: "#fff" }} />
            </IconButton>
          </ListItemButton>
          <ListItemButton
            sx={{ marginBottom: -2 }}
            onClick={() => handleMenuItemClick("Integrations")}>
            <ListItemIcon>
              <PowerIcon sx={{ color: "#fff" }} />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Integrations" />}
          </ListItemButton>
          <ListItemButton
            sx={{
              marginBottom: -2,
              ...getMenuItemStyles("Settings"),
            }}
            onClick={() => handleMenuItemClick("Settings")}>
            <ListItemIcon>
              <SettingsIcon sx={{ color: getIconColor("Settings") }} />
            </ListItemIcon>
            {!collapsed && (
              <ListItemText
                primary="Settings"
                sx={{ color: getIconColor("Settings") }}
              />
            )}
          </ListItemButton>
        </List>
        <Divider sx={{ backgroundColor: "white", marginTop: 2 }} />
        <List>
          {" "}
          <ListItemButton onClick={() => handleCollapseToggle()}>
            {!collapsed && <ListItemText primary="Collapse" />}
            <ListItemIcon>
              {" "}
              <KeyboardTabRoundedIcon
                sx={{
                  color: "#fff",
                  transform: "scaleX(-1)",
                  marginLeft: collapsed ? "2px" : "24px",
                }}
              />
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={() => handleMenuItemClick("logout")}>
            <ListItemIcon sx={{ color: "white" }}>
              <LogoutIcon />
            </ListItemIcon>
            {!collapsed && <ListItemText primary="Logout" />}
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
