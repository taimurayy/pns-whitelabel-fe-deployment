import React from "react";
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  IconButton,
  TableHead,
  Menu,
  MenuItem,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const availableFields = [
  "Name",
  "Title",
  "Lead",
  "LeadUrl",
  "LeadDescription",
  "LeadStatus",
  "LeadUpdated",
  "LeadCreated",
  "LeadCreatedBy",
  "PrimaryAddress",
];
const Leads = [
  {
    Name: "Bruce Wayne",
    Title: "Dark Knight",
    Lead: "Wayne Enterprises",
    LeadUrl: "www.example.com",
    LeadDescription: "Check it out",
    LeadStatus: "Qualified",
    LeadUpdated: "1 mint ago",
    LeadCreated: "1 mint ago",
    LeadCreatedBy: "John Fransico",
    PrimaryAddress: "John Fransico",
  },
  {
    Name: "Bruce Wayne",
    Title: "Dark Knight",
    Lead: "Wayne Enterprises",
    LeadUrl: "www.example.com",
    LeadDescription: "Check it out",
    LeadStatus: "Qualified",
    LeadUpdated: "1 mint ago",
    LeadCreated: "1 mint ago",
    LeadCreatedBy: "John Fransico",
    PrimaryAddress: "John Fransico",
  },
  {
    Name: "Bruce Wayne",
    Title: "Dark Knight",
    Lead: "Wayne Enterprises",
    LeadUrl: "www.example.com",
    LeadDescription: "Check it out",
    LeadStatus: "Qualified",
    LeadUpdated: "1 mint ago",
    LeadCreated: "1 mint ago",
    LeadCreatedBy: "John Fransico",
    PrimaryAddress: "John Fransico",
  },
  {
    Name: "Bruce Wayne",
    Title: "Dark Knight",
    Lead: "Wayne Enterprises",
    LeadUrl: "www.example.com",
    LeadDescription: "Check it out",
    LeadStatus: "Qualified",
    LeadUpdated: "1 mint ago",
    LeadCreated: "1 mint ago",
    LeadCreatedBy: "John Fransico",
    PrimaryAddress: "John Fransico",
  },
];

const CustomFeildStatusTable: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedFields, setSelectedFields] =
    useState<string[]>(availableFields);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFieldToggle = (field: string) => {
    setSelectedFields((prevFields) =>
      prevFields.includes(field)
        ? prevFields.filter((f) => f !== field)
        : [...prevFields, field]
    );
  };

  return (
    <Box sx={{ width: "160%" }}>
      <Box sx={{ ml: 1, mt: 0 }}>
        <IconButton sx={{ color: "black" }} onClick={handleClick}>
          <AddCircleRoundedIcon sx={{ mr: 2 }} />
          <Typography sx={{ fontSize: "1.5rem", fontWeight: 400 }}>
            Add filter
          </Typography>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          {availableFields.map((field) => (
            <MenuItem key={field} onClick={() => handleFieldToggle(field)}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}>
                <Checkbox
                  checked={selectedFields.includes(field)}
                  onChange={() => handleFieldToggle(field)}
                />
                {field}
              </label>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box
        mb={4}
        sx={{
          border: "1px solid black",
          borderRadius: 1,
        }}>
        <TableContainer sx={{ overflow: "hidden" }}>
          <Table>
            <TableHead>
              <TableRow>
                {selectedFields.includes("Name") && (
                  <TableCell
                    sx={{
                      padding: "2px 20px",
                      borderRight: "1px solid black",
                      backgroundColor: "#f9f9f9",
                    }}>
                    <Box display="flex">
                      <Typography sx={{ fontWeight: 600, mt: 1 }}>
                        {" "}
                        Name
                      </Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreHorizRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}

                <TableCell
                  sx={{
                    padding: "14px 16px",
                    borderRight: "1px solid black",
                    backgroundColor: "#f9f9f9",
                    paddingLeft: "9px",
                  }}>
                  <Box display="flex">
                    <IconButton>
                      <AddIcCallRoundedIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    padding: "14px 16px",
                    borderRight: "1px solid black",
                    backgroundColor: "#f9f9f9",
                    paddingLeft: "9px",
                  }}>
                  <Box display="flex">
                    <IconButton>
                      <EmailRoundedIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                {selectedFields.includes("Title") && (
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      borderRight: "1px solid black",
                      backgroundColor: "#f9f9f9",
                    }}>
                    <Box display="flex">
                      <Typography sx={{ fontWeight: 600, mt: 1 }}>
                        {" "}
                        Title
                      </Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreHorizRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
                {selectedFields.includes("Lead") && (
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      backgroundColor: "#f9f9f9",
                      borderRight: "1px solid black",
                    }}>
                    <Box display="flex">
                      <Typography sx={{ fontWeight: 600, mt: 1 }}>
                        {" "}
                        Lead
                      </Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreHorizRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
                {selectedFields.includes("LeadUrl") && (
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      backgroundColor: "#f9f9f9",
                      borderRight: "1px solid black",
                    }}>
                    <Box display="flex">
                      <Typography sx={{ fontWeight: 600, mt: 1 }}>
                        {" "}
                        Lead Url
                      </Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreHorizRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
                {selectedFields.includes("LeadDescription") && (
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      backgroundColor: "#f9f9f9",
                      borderRight: "1px solid black",
                    }}>
                    <Box display="flex">
                      <Typography sx={{ fontWeight: 600, mt: 1 }}>
                        {" "}
                        Lead Description
                      </Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreHorizRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
                {selectedFields.includes("LeadStatus") && (
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      backgroundColor: "#f9f9f9",
                      borderRight: "1px solid black",
                    }}>
                    <Box display="flex">
                      <Typography sx={{ fontWeight: 600, mt: 1 }}>
                        {" "}
                        Lead Status
                      </Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreHorizRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
                {selectedFields.includes("LeadUpdated") && (
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      backgroundColor: "#f9f9f9",
                      borderRight: "1px solid black",
                    }}>
                    <Box display="flex">
                      <Typography sx={{ fontWeight: 600, mt: 1 }}>
                        {" "}
                        Lead Updated By
                      </Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreHorizRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
                {selectedFields.includes("LeadCreated") && (
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      backgroundColor: "#f9f9f9",
                      borderRight: "1px solid black",
                    }}>
                    <Box display="flex">
                      <Typography sx={{ fontWeight: 600, mt: 1 }}>
                        {" "}
                        Lead Created
                      </Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreHorizRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
                {selectedFields.includes("LeadCreatedBy") && (
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      backgroundColor: "#f9f9f9",
                      borderRight: "1px solid black",
                    }}>
                    <Box display="flex">
                      <Typography sx={{ fontWeight: 600, mt: 1 }}>
                        {" "}
                        Lead Created By
                      </Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreHorizRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
                {selectedFields.includes("PrimaryAddress") && (
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      backgroundColor: "#f9f9f9",
                    }}>
                    <Box display="flex">
                      <Typography sx={{ fontWeight: 600, mt: 1 }}>
                        {" "}
                        Primary Address
                      </Typography>
                      <IconButton sx={{ ml: "auto" }}>
                        <MoreHorizRoundedIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {Leads.map((status, index) => (
                <TableRow key={index}>
                  {selectedFields.includes("Name") && (
                    <TableCell
                      sx={{
                        padding: "14px 16px",
                        borderRight: "1px solid black",
                        color: "blue",
                      }}>
                      {status.Name}
                    </TableCell>
                  )}
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      borderRight: "1px solid black",
                    }}>
                    <AddIcCallRoundedIcon />
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      borderRight: "1px solid black",
                    }}>
                    <EmailRoundedIcon />
                  </TableCell>
                  {selectedFields.includes("Title") && (
                    <TableCell
                      sx={{
                        padding: "14px 16px",
                        borderRight: "1px solid black",
                      }}>
                      {status.Title}
                    </TableCell>
                  )}
                  {selectedFields.includes("Lead") && (
                    <TableCell
                      sx={{
                        padding: "14px 16px",
                        borderRight: "1px solid black",
                      }}>
                      {status.Lead}
                    </TableCell>
                  )}
                  {selectedFields.includes("LeadUrl") && (
                    <TableCell
                      sx={{
                        padding: "14px 16px",
                        borderRight: "1px solid black",
                      }}>
                      {status.LeadUrl}
                    </TableCell>
                  )}
                  {selectedFields.includes("LeadDescription") && (
                    <TableCell
                      sx={{
                        padding: "14px 16px",
                        borderRight: "1px solid black",
                      }}>
                      {status.LeadDescription}
                    </TableCell>
                  )}
                  {selectedFields.includes("LeadStatus") && (
                    <TableCell
                      sx={{
                        padding: "14px 16px",
                        borderRight: "1px solid black",
                      }}>
                      {status.LeadStatus}
                    </TableCell>
                  )}
                  {selectedFields.includes("LeadUpdated") && (
                    <TableCell
                      sx={{
                        padding: "14px 16px",
                        borderRight: "1px solid black",
                      }}>
                      {status.LeadUpdated}
                    </TableCell>
                  )}
                  {selectedFields.includes("LeadCreated") && (
                    <TableCell
                      sx={{
                        padding: "14px 16px",
                        borderRight: "1px solid black",
                      }}>
                      {status.LeadCreated}
                    </TableCell>
                  )}
                  {selectedFields.includes("LeadCreatedBy") && (
                    <TableCell
                      sx={{
                        padding: "14px 16px",
                        borderRight: "1px solid black",
                      }}>
                      {status.LeadCreatedBy}
                    </TableCell>
                  )}
                  {selectedFields.includes("PrimaryAddress") && (
                    <TableCell
                      sx={{
                        padding: "14px 16px",
                      }}>
                      {status.PrimaryAddress}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

const ContactsTable: React.FC = () => {
  return (
    <Box p={4}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <CustomFeildStatusTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactsTable;
