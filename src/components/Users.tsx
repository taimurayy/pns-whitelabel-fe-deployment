// src/components/UsersComponent.tsx
import { Box } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Genericbox from "./boxforuserandgroup";
const UsersComponent = () => (
  <Box>
    <Genericbox
      icon={<AccountCircleRoundedIcon sx={{ fontSize: "5rem" }} />}
      title="Users"
      message="Currently there are no users"
      buttonText="Add users"
      onButtonClick={() => console.log("Add users clicked")}
    />
  </Box>
);

export default UsersComponent;
