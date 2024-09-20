import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const navigate = useNavigate();

  // Check the current path to set the initial selected state
  const [selected, setSelected] = useState<string>(location.pathname);

  const handleNavigation = (text: string, path: string) => {
    console.log(text);
    setSelected(path); // Set the selected state to the path
    navigate(path); // Navigate to the desired route without reloading the page
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      PaperProps={{
        sx: {
          marginLeft: "280px",
          marginTop: "210px",
          zIndex: 2,
          height: "750px",
          overflow: "auto",
        },
      }}
      variant="permanent"
      anchor="left">
      <Divider />
      <List sx={{ mt: 2 }}>
        {["Account", "Memberships"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                },
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  color: "gray",
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                    "&:hover": {
                      color: "blue",
                    },
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ mt: 2 }}>
        {["Organization"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                },
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  color: "black",
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                    "&:hover": {
                      color: "blue",
                    },
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ mt: -2 }}>
        {[
          { text: "General", path: "/General" },
          { text: "Team Management", path: "/TeamManagement" },
          { text: "Roles And Permissions", path: "/" },
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(text, path)}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                  color: "blue",
                },
                Color: selected === path ? "#e0f7fa" : "transparent", // Change background when selected
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  "&:hover": {
                    backgroundColor: "transparent !important",
                    color: "blue",
                  },
                  color: selected === path ? "blue" : "gray", // Change color when selected
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ mt: 2 }}>
        {["Customization"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                },
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  color: "black",
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                    "&:hover": {
                      color: "blue",
                    },
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ mt: -2 }}>
        {[
          { text: "Custom Activities", path: "/custom-activities" },
          { text: "Custom Fields", path: "/CustomFields" },
          { text: "Custom Objects", path: "/custom-objects" },
          { text: "Shared Fields", path: "/shared-fields" },
          { text: "Integration Links", path: "/integration-links" },
          { text: "Scheduling Links", path: "/scheduling-links" },
          { text: "Status & Pipelines", path: "/StatusAndPipelines" },
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(text, path)}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                  color: "blue",
                },
                Color: selected === path ? "#e0f7fa" : "transparent", // Change background when selected
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  "&:hover": {
                    backgroundColor: "transparent !important",
                    color: "blue",
                  },
                  color: selected === path ? "blue" : "gray", // Change color when selected
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ mt: 2 }}>
        {[{ text: "Communication", path: "/communication" }].map(
          ({ text, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(text, path)}
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent !important",
                  },
                  backgroundColor:
                    selected === path ? "#e0f7fa" : "transparent", // Change background when selected
                }}>
                <ListItemText
                  sx={{
                    mt: -2.5,
                    color: selected === path ? "blue" : "black", // Change color when selected
                    "& .MuiListItemText-primary": {
                      color: "inherit",
                      fontSize: "0.75rem", // Adjusted font size
                    },
                  }}
                  primary={text}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List sx={{ mt: 2 }}>
        {["Communication"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                },
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  color: "black",
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                    "&:hover": {
                      color: "blue",
                    },
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ mt: -2 }}>
        {[
          { text: "Phone & Voicemail", path: "/PhonesAndVoiceMails" },
          { text: "Dialer", path: "/AccountsAndApps" },
          { text: "Email", path: "/Developers" },
          {
            text: "Shared Fields",
            path: "/Developers",
          },
          {
            text: "Templates & Snippets",
            path: "/Developers",
          },
          {
            text: "Saved As",
            path: "/Developers",
          },
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(text, path)}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                  color: "blue",
                },
                Color: selected === path ? "#e0f7fa" : "transparent", // Change background when selected
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  "&:hover": {
                    backgroundColor: "transparent !important",
                    color: "blue",
                  },
                  color: selected === path ? "blue" : "gray", // Change color when selected
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ mt: 2 }}>
        {["Connect"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                },
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  color: "black",
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                    "&:hover": {
                      color: "blue",
                    },
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ mt: -2 }}>
        {[
          { text: "Integrations", path: "/Integrations" },
          { text: "Accounts & Apps", path: "/AccountsAndApps" },
          { text: "Developers", path: "/Developers" },
        ].map(({ text, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(text, path)}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                  color: "blue",
                },
                Color: selected === path ? "#e0f7fa" : "transparent", // Change background when selected
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  "&:hover": {
                    backgroundColor: "transparent !important",
                    color: "blue",
                  },
                  color: selected === path ? "blue" : "gray", // Change color when selected
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List sx={{ mt: 1 }}>
        {["Billing"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                },
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  color: "black",
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                    "&:hover": {
                      color: "blue",
                    },
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List sx={{ mt: -2 }}>
        {["Plan", "Usage"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent !important",
                },
              }}>
              <ListItemText
                sx={{
                  mt: -2.5,
                  color: "gray",
                  fontSize: "0.5rem", // Adjusted font size
                  "& .MuiListItemText-primary": {
                    color: "inherit",
                    fontSize: "0.75rem", // Adjusted font size
                    "&:hover": {
                      color: "blue",
                    },
                  },
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
