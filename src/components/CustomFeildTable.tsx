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
  Button,
  IconButton,
  TableHead,
  Chip,
} from "@mui/material";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SearchComponent from "./Search";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const CustomStatus = [
  {
    status: "Current Vendor/Software",
    type: "Dropdown",
    icon: <CheckCircleOutlineRoundedIcon />,
  },
  {
    status: "Industry",
    type: "Dropdown",
    icon: <CheckCircleOutlineRoundedIcon />,
  },
  { status: "Lead Owner", type: "User", icon: <AccountCircleRoundedIcon /> },
  {
    status: "Referal Source",
    type: "Dropdown",
    icon: <CheckCircleOutlineRoundedIcon />,
  },
];

const CustomFeildStatusTable: React.FC = () => {
  return (
    <Box sx={{ width: "120%" }}>
      <Box display="flex">
        <SearchComponent />
        <Button
          variant="outlined"
          sx={{ border: "1px solid black", ml: "auto" }}
          startIcon={<AddIcon />}>
          New Lead Custom Feild
        </Button>
      </Box>

      <Box
        mb={4}
        mt={2}
        sx={{
          border: "1px solid black",
          borderRadius: 2,
        }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CustomStatus.map((status, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ padding: "14px 16px" }}>
                    <Box display="flex">
                      <Typography sx={{ color: "gray", mr: 2 }}>
                        {index + 1}
                      </Typography>{" "}
                      <Typography color="primary" sx={{ mr: 1 }}>
                        {"  "} {status.status}
                      </Typography>{" "}
                      <Box sx={{ ml: "auto" }}>
                        {status.type === "Shared" ? (
                          <Chip label="SHARED" color="primary" />
                        ) : status.type === "WON" ? (
                          <Chip label="SHARED" color="primary" />
                        ) : (
                          <Chip label="DISABLED" color="primary" />
                        )}
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ padding: "14px 16px" }}>
                    <Box display="flex">
                      <Box sx={{ mr: 2 }}>{status.icon}</Box>
                      <Typography sx={{ mr: 1 }}> {status.type} </Typography>
                      <Typography sx={{ color: "gray" }}>(Single)</Typography>
                      <Box sx={{ ml: "auto" }}>
                        <IconButton size="small">
                          <EditIcon />
                        </IconButton>
                        <IconButton size="small">
                          <DeleteIcon />
                        </IconButton>
                        <IconButton size="small">
                          <MoreHorizRoundedIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

const CustomFeildPage: React.FC = () => {
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

export default CustomFeildPage;
