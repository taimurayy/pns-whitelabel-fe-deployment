// src/components/GroupsComponent.tsx
import { useState } from "react";
import Genericbox from "./boxforuserandgroup";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const GroupsComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddGroup = () => {
    // Logic to add group
    console.log("Group added");
    handleClose(); // Close the modal after adding the group
  };

  return (
    <Box>
      <Genericbox
        icon={<GroupRoundedIcon sx={{ fontSize: "5rem" }} />}
        title="Groups"
        message="Currently there are no groups"
        buttonText="Add groups"
        onButtonClick={handleOpen} // Open modal on button click
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontWeight: 400 }}>New Group</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          {/* Add more fields as necessary */}
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#f9f9f9" }}>
          <Button variant="contained" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="contained" onClick={handleAddGroup} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GroupsComponent;
