import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Link,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
const AddLeadModal: React.FC<{
  open: boolean;
  onClose: () => void;
  onAddLead: (lead: { companyName: string; contactName: string }) => void; // Add this prop
}> = ({ open, onClose, onAddLead }) => {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");

  const handleSubmit = () => {
    onAddLead({ companyName, contactName }); // Call the function to add the lead
    setCompanyName(""); // Clear the input fields
    setContactName("");
    onClose(); // Close the modal after submission
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: 600 }}>New Lead</DialogTitle>
      <DialogContent>
        <Box display="flex">
          <TextField
            autoFocus
            margin="dense"
            label="Company Name"
            fullWidth
            placeholder="e.g., Close"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Contact Name"
            fullWidth
            value={contactName}
            placeholder="e.g., Taimur"
            onChange={(e) => setContactName(e.target.value)}
            sx={{ ml: 2 }} // Add some margin for better spacing
          />
        </Box>
      </DialogContent>
      <Box display="flex">
        <Typography sx={{ fontSize: "0.8rem", mt: 2, ml: 3 }}>
          <Link href="/ImportLeads" underline="hover" color="primary">
            <CloudUploadIcon
              sx={{ verticalAlign: "middle", mr: 0.5, mt: -0.5 }}
            />
            Import Leads
          </Link>
        </Typography>
        <DialogActions sx={{ backgroundColor: "#f9f9f9", ml: "auto" }}>
          <Button variant="contained" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSubmit}
            color="primary"
            disabled={!companyName || !contactName} // Disable if any field is empty
          >
            Create Lead
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AddLeadModal;
