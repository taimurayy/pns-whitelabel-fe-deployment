import { useState } from "react";
import { Typography, Box, Chip, Divider } from "@mui/material";
import PersonAddRoundedIcon from "@mui/icons-material/PersonAddRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import WifiTetheringRoundedIcon from "@mui/icons-material/WifiTetheringRounded";
import UsersComponent from "./Users";
import GroupsComponent from "./Groups";
import UserTable from "./Team Management/UserTable";
const TeamManagementcomp = () => {
  const [selected, setSelected] = useState("users");
  const [usersCount, setUsersCount] = useState(2);
  const groupsCount = 0; // Replace with actual data

  const handleSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <Box>
      <Box display="flex" sx={{ mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mr: 2,
            color: selected === "users" ? "black" : "grey",
            borderBottom: selected === "users" ? "2px solid black" : "none",
            paddingBottom: "8px",
            cursor: "pointer",
          }}
          onClick={() => handleSelect("users")}>
          <PersonAddRoundedIcon sx={{ mt: 0.5, mr: 1 }} />
          Users
          <Chip
            label={usersCount}
            size="small"
            color="primary"
            sx={{ ml: 1, mt: 0.5 }}
          />
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: selected === "groups" ? "black" : "grey",
            borderBottom: selected === "groups" ? "2px solid black" : "none",
            paddingBottom: "8px",
            mr: 2,
            cursor: "pointer",
          }}
          onClick={() => handleSelect("groups")}>
          <GroupRoundedIcon sx={{ mt: 0.5, mr: 1 }} />
          Groups
          <Chip
            label={groupsCount}
            size="small"
            color="primary"
            sx={{ ml: 1, mt: 0.5 }}
          />
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: selected === "trusteddomains" ? "black" : "grey",
            borderBottom:
              selected === "trusteddomains" ? "2px solid black" : "none",
            paddingBottom: "8px",
            cursor: "pointer",
          }}
          onClick={() => handleSelect("trusteddomains")}>
          <WifiTetheringRoundedIcon sx={{ mt: 0.5, mr: 1 }} />
          Trusted Domains
          <Chip
            label="new"
            size="small"
            color="primary"
            sx={{ ml: 1, mt: 0.5 }}
          />
        </Typography>
      </Box>
      <Divider sx={{ mt: -2, width: "104.5%", ml: -6 }} />
      <Box sx={{ mt: 2 }}>
        {selected === "users" && usersCount < 1 && <UsersComponent />}
        {selected === "users" && usersCount > 0 && (
          <UserTable onUserCountChange={setUsersCount} />
        )}
        {selected === "groups" && <GroupsComponent />}
      </Box>
    </Box>
  );
};

export default TeamManagementcomp;
