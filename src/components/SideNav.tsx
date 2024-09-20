import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import PaymentIcon from "@mui/icons-material/Payment";
import BrushIcon from "@mui/icons-material/Brush";
import LogoutIcon from "@mui/icons-material/Logout"; // Import LogoutIcon
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/LOGO.png";

const navItems = [
  {
    icon: (
      <img src={logo} alt="Logo" style={{ width: "70px", height: "70px" }} />
    ), // Use the logo image here
    label: "",
    path: "/Dashboard",
  },
  { icon: <PersonIcon />, label: "Clients", path: "/Dashboard/Clients" },
  { icon: <SettingsIcon />, label: "Settings", path: "/Dashboard/Settings" },
  { icon: <PaymentIcon />, label: "Billing", path: "/Dashboard/Billings" },
  {
    icon: <BrushIcon />,
    label: "Customization",
    path: "/Dashboard/Customization",
  },
];

export function SideNav() {
  const [drawerWidth, setDrawerWidth] = React.useState(100); // Initial width of the drawer
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg")); // Detect screen size
  const location = useLocation(); // Get current location
  const navigate = useNavigate();

  // Update selectedIndex based on current location
  React.useEffect(() => {
    const currentPath = location.pathname;
    let index = navItems.findIndex((item) => item.path === currentPath);
    console.log(index);
    if (index === 0) {
      index = index + 1;
    }
    console.log(index);
    setSelectedIndex(index !== -1 ? index : null);
  }, [location.pathname]);

  const handleDrawerToggle = () => {
    setDrawerWidth((prevWidth) => (prevWidth === 100 ? 60 : 100)); // Toggle width
  };

  const handleButtonClick = (index: number, path: string) => {
    if (path === "/Logout") {
      // Handle logout logic here, like clearing session data or redirecting to login
      console.log("Logging out...");
      // Example: Redirect to login page
      navigate("/login");
      return;
    } else if (path === "/Dashboard") {
      setSelectedIndex(1);
    } else {
      setSelectedIndex(index);
    } // Set the selected index
    navigate(path);
  };

  if (isSmallScreen) {
    return (
      <>
        {/* Top Navbar */}
        <Box
          sx={{
            width: "100%",
            padding: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#001f3f", // Background color for the top bar
            color: "white",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1200, // Ensure it is above other content
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Optional shadow for better visibility
          }}>
          <Button
            sx={{
              textTransform: "none",
              color: "white",
              fontSize: "1rem",
              textAlign: "left",
            }}>
            Hi, Taimur
          </Button>
          <Button
            onClick={() => handleButtonClick(navItems.length, "/Logout")}
            sx={{ textTransform: "none", color: "white", marginRight: "10px" }}>
            <LogoutIcon sx={{ marginRight: "2px" }} />
            Logout
          </Button>
        </Box>

        {/* Footer Navbar */}
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            left: 0,
            display: "flex",
            flexDirection: "row", // Align icons horizontally
            justifyContent: "space-around", // Space icons evenly
            backgroundColor: "#001f3f", // Background color for the footer bar
            color: "white",
            padding: "8px",
            margin: "0px",
            boxSizing: "border-box",
            boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.2)", // Optional shadow for better visibility
            zIndex: 2,
          }}>
          {navItems.slice(0).map(
            (
              item,
              index // Exclude the first item for footer
            ) => (
              <Button
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textTransform: "none",
                  color: selectedIndex === index ? "yellow" : "white", // Highlight selected item
                  backgroundColor:
                    selectedIndex === index ? "#003a63" : "transparent",
                  gap: 1,
                  fontSize: "0.6rem",
                }}
                onClick={() => handleButtonClick(index, item.path)} // Added onClick here
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {item.icon}
                </Box>
                <Box component="span" sx={{ textAlign: "center" }}>
                  {item.label}
                </Box>
              </Button>
            )
          )}
        </Box>
      </>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#000d27",
          color: "white",
        },
      }}>
      <Box
        sx={{
          padding: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
          {drawerWidth === 100 ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>

      {/* Main Navigation Items */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between", // Space between nav items and logout
          height: "100vh", // Ensure it covers the full height
        }}>
        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {navItems.map((item, index) => (
            <Button
              key={index}
              sx={{
                width: "100%",
                justifyContent: "flex-start", // Align items to the start of the button
                padding: "8px",
                textTransform: "none",
                color: selectedIndex === index ? "yellow" : "white", // Highlight selected item
                backgroundColor:
                  selectedIndex === index ? "#003a63" : "transparent", // Background color for selected item
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                fontSize: "0.6rem",
              }}
              onClick={() => handleButtonClick(index, item.path)}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {item.icon}
              </Box>
              {drawerWidth === 100 && (
                <Box component="span" sx={{ textAlign: "center" }}>
                  {item.label}
                </Box>
              )}
            </Button>
          ))}
        </Box>

        {/* Logout Button at the Bottom */}
        <Box sx={{ width: "100%", padding: "8px" }}>
          <Button
            sx={{
              width: "100%",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: "0.6rem",
              gap: 1,
            }}
            onClick={() => handleButtonClick(navItems.length, "/Logout")}>
            <LogoutIcon />
            {drawerWidth === 100 && (
              <Box component="span" sx={{ textAlign: "center" }}>
                Logout
              </Box>
            )}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
