// src/components/GroupsComponent.tsx
import Genericbox from "./boxforuserandgroup";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import { Box } from "@mui/material";

const GroupsComponent = () => (
  <Box>
    <Genericbox
      icon={<GroupRoundedIcon sx={{ fontSize: "5rem" }} />}
      title="Groups"
      message="Currently there are no groups"
      buttonText="Add groups"
      onButtonClick={() => console.log("Add groups clicked")}
    />
  </Box>
);

export default GroupsComponent;
