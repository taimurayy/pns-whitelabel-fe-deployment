import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGlobalContext } from "./GlobalVar";
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const navigate = useNavigate();
  const { collapsed } = useGlobalContext();

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
          marginLeft: collapsed ? "70px" : "280px",
          marginTop: "210px",
          zIndex: 2,
          height: "750px",
          overflow: "auto",
        },
      }}
      variant="permanent"
      anchor="left">
      <Divider />
      <List
        sx={{
          mt: 2,
        }}>
        {[
          { text: "Accounts", path: "/processing" },
          { text: "Memberships", path: "/processing" },
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
      <List
        sx={{
          mt: 2,
        }}>
        {[{ text: "Organizations", path: "/General" }].map(({ text, path }) => (
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
                  color: selected === path ? "black" : "black", // Change color when selected
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
      <List
        sx={{
          mt: -2,
        }}>
        {[
          { text: "General", path: "/General" },
          { text: "Team Management", path: "/TeamManagement" },
          { text: "Roles And Permissions", path: "/RolesAndPermissions" },
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
      <List
        sx={{
          mt: 2,
        }}>
        {[{ text: "Customizations", path: "/CustomFields" }].map(
          ({ text, path }) => (
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
                    color: selected === path ? "black" : "black", // Change color when selected
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
      <List
        sx={{
          mt: -2,
        }}>
        {[
          { text: "Custom Activities", path: "/processing" },
          { text: "Custom Fields", path: "/CustomFields" },
          { text: "Custom Objects", path: "/processing" },
          { text: "Shared Fields", path: "/processing" },
          { text: "Integration Links", path: "/processing" },
          { text: "Scheduling Links", path: "/SchedulingLinks" },
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

      <Divider />
      <List
        sx={{
          mt: 2,
        }}>
        {[{ text: "Communications", path: "/PhonesAndVoiceMails" }].map(
          ({ text, path }) => (
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
                    color: selected === path ? "black" : "black", // Change color when selected
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
      <List
        sx={{
          mt: -2,
        }}>
        {[
          { text: "Phone & Voicemail", path: "/PhonesAndVoiceMails" },
          { text: "Dialer", path: "/processing" },
          { text: "Email", path: "/processing" },
          {
            text: "Shared Fields",
            path: "/processing",
          },
          {
            text: "Templates & Snippets",
            path: "/processing",
          },
          {
            text: "Saved As",
            path: "/processing",
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
      <List
        sx={{
          mt: 2,
        }}>
        {[{ text: "Connect", path: "/AccountsAndApps" }].map(
          ({ text, path }) => (
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
                    color: selected === path ? "black" : "black", // Change color when selected
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
      <List
        sx={{
          mt: -2,
        }}>
        {[
          { text: "Integrations", path: "/processing" },
          { text: "Accounts & Apps", path: "/AccountsAndApps" },
          { text: "Developers", path: "/processing" },
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
      <List
        sx={{
          mt: 1,
        }}>
        {[{ text: "Billing", path: "/processing" }].map(({ text, path }) => (
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
                  color: selected === path ? "black" : "black", // Change color when selected
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
      <List
        sx={{
          mt: -2,
        }}>
        {[
          { text: "Plan", path: "/processing" },
          { text: "Usage", path: "/processing" },
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
    </Drawer>
  );
}
