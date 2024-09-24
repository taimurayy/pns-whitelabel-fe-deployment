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
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  Chip,
} from "@mui/material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

// Sample Data for Lead Statuses and Opportunity Statuses
const leadStatuses = [
  "Potential",
  "Bad Fit",
  "Qualified",
  "Customer",
  "Interested",
  "Canceled",
  "Not Interested",
];

const opportunityStatuses = [
  { status: "Demo Completed", type: "ACTIVE" },
  { status: "Proposal Sent", type: "ACTIVE" },
  { status: "Contract Sent", type: "ACTIVE" },
  { status: "Won", type: "WON" },
  { status: "Lost", type: "LOST" },
];

const LeadStatusesTable: React.FC = () => {
  return (
    <Box sx={{ width: "500px" }}>
      <Typography variant="h6">Lead Statuses</Typography>
      <Typography variant="body2" sx={{ color: "#7c7c7c" }} gutterBottom>
        Lead Statuses represent a Lead's current relationship to your company.
      </Typography>
      <Box
        mb={4}
        sx={{
          border: "1px solid black",
          Padding: 3,
          borderRadius: 2,
        }}>
        <Box
          display="flex"
          mb={2}
          sx={{
            border: "1px solid #eef7fc",
            padding: 2,
            backgroundColor: "#eef7fc",
            borderRadius: 2,
          }}>
          <TextField
            label="Status Name"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: 2 }}
          />
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Add
          </Button>
        </Box>

        <TableContainer>
          <Table>
            {/* <TableHead>
              <TableRow>
                <TableCell>Status Name</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
              {leadStatuses.map((status, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ padding: "4px 12px" }}>
                    <Box display="flex">
                      <Typography sx={{ color: "gray", mr: 3 }}>
                        {index + 1}
                      </Typography>{" "}
                      <Typography sx={{ color: "black", mr: 1 }}>
                        {"  "} {status}
                      </Typography>{" "}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ padding: "4px 12px" }} align="right">
                    <IconButton size="small" sx={{ color: "black" }}>
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "black" }}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton size="small" sx={{ color: "black" }}>
                      <MoreHorizRoundedIcon />
                    </IconButton>
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

const OpportunityStatusesTable: React.FC = () => {
  return (
    <Box sx={{ width: "500px" }}>
      <Typography variant="h6">Opportunity Pipelines & Statuses</Typography>
      <Typography variant="body2" sx={{ color: "#7c7c7c" }} gutterBottom>
        Opportunity Statuses describe each stage of a deal and should align with
        your overall sales process.
      </Typography>
      <Box
        mb={4}
        sx={{
          border: "1px solid black",
          borderRadius: 2,
        }}>
        <Box display="flex" sx={{ padding: 1.5 }}>
          <Typography sx={{ mr: "auto", fontWeight: 1000 }}>Sales</Typography>
          <Box sx={{ ml: "auto" }}>
            <IconButton size="small">
              <EditIcon />
            </IconButton>
            <IconButton size="small">
              <ContentCopyRoundedIcon />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          display="flex"
          mb={2}
          sx={{
            border: "1px solid #eef7fc",
            padding: 2,
            backgroundColor: "#eef7fc",
            borderRadius: 2,
          }}>
          <TextField
            label="Status Name"
            variant="outlined"
            fullWidth
            sx={{ backgroundColor: "white", borderRadius: 2 }}
          />
          <Select
            defaultValue="Active"
            variant="outlined"
            size="small"
            sx={{ ml: 2 }}>
            <MenuItem value="Active">
              <FiberManualRecordRoundedIcon fontSize="small" color="warning" />
              Active
            </MenuItem>

            <MenuItem value="Won">
              <FiberManualRecordRoundedIcon fontSize="small" color="success" />
              Won
            </MenuItem>
            <MenuItem value="Lost">
              {" "}
              <FiberManualRecordRoundedIcon
                fontSize="small"
                sx={{ color: "gray" }}
              />{" "}
              Lost
            </MenuItem>
          </Select>
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Add
          </Button>
        </Box>

        <TableContainer>
          <Table>
            {/* <TableHead>
              <TableRow>
                <TableCell>Status Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
              {opportunityStatuses.map((opportunity, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ padding: "4px 12px" }}>
                    <Box display="flex">
                      <Typography sx={{ color: "gray", mr: 2 }}>
                        {index + 1}
                      </Typography>{" "}
                      <Typography sx={{ color: "black", mr: 1 }}>
                        {"  "} {opportunity.status}
                      </Typography>{" "}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ padding: "4px 12px" }} align="right">
                    {opportunity.type === "ACTIVE" ? (
                      <Chip label="ACTIVE" color="warning" />
                    ) : opportunity.type === "WON" ? (
                      <Chip label="WON" color="success" />
                    ) : (
                      <Chip label="LOST" color="default" />
                    )}
                    <IconButton size="small">
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Button
        variant="outlined"
        sx={{ border: "1px solid black", mt: -2 }}
        startIcon={<AddIcon />}>
        New Pipeline
      </Button>
    </Box>
  );
};

const StatusesPage: React.FC = () => {
  return (
    <Box p={4}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <LeadStatusesTable />
        </Grid>
        <Grid item xs={10}>
          <OpportunityStatusesTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatusesPage;
