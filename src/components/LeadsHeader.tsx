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
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import { SplitscreenRounded } from "@mui/icons-material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import GroupIcon from "@mui/icons-material/Group";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
const Leads = [
  {
    Name: "Close (Example lead)",
    Contacts: "Close Sales Team +3",
    Status: "Potientital",
  },
  {
    Name: "Bluth (Example lead)",
    Contacts: "Close Sales Team +6",
    Status: "Potientital",
  },
  {
    Name: "Close (Example lead)",
    Contacts: "Wayne Sales Team +8",
    Status: "Qualified",
  },
];

const CustomFeildStatusTable: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/ImportLeads"); // Define the correct path to the Import Leads page
  };
  return (
    <Box sx={{ width: "125%" }}>
      <Box display="flex" sx={{ mt: -4, backgroundColor: "#f9f9f9" }}>
        <Box sx={{ mt: 1, ml: 2 }} display="flex">
          <Typography sx={{ color: "black", mr: 1, fontSize: "1.5rem" }}>
            Find leads
          </Typography>
          <IconButton>
            <Typography
              sx={{ color: "black", mt: -1, ml: 1, fontSize: "1.5rem" }}>
              All of
            </Typography>
            <KeyboardDoubleArrowUpRoundedIcon sx={{ color: "black", mt: -1 }} />
          </IconButton>
        </Box>
      </Box>
      <Box display="flex" sx={{ ml: 2 }}>
        <Typography sx={{ color: "black", mr: 1 }}>Where</Typography>
        <Typography sx={{ color: "grey" }}>There</Typography>

        <IconButton>
          <Typography sx={{ color: "black", mt: -1, ml: 1 }}>Is</Typography>
          <KeyboardDoubleArrowUpRoundedIcon sx={{ color: "black", mt: -1 }} />
        </IconButton>
        <Typography sx={{ color: "black", ml: 1 }}>an Opportunity</Typography>
        <Typography sx={{ color: "grey", ml: 1 }}>matching</Typography>
        <IconButton>
          <Typography sx={{ color: "black", mt: -1, ml: 1 }}>All of</Typography>
          <KeyboardDoubleArrowUpRoundedIcon sx={{ color: "black", mt: -1 }} />
        </IconButton>
      </Box>
      <Box display="flex" gap={2} sx={{ ml: 2 }}>
        <Chip
          label="Add"
          sx={{ backgroundColor: "lightgray", mt: 0.5 }}
          onClick={handleNavigate}
        />

        <IconButton>
          <FilterAltIcon />
          <Typography sx={{ marginLeft: 1, color: "black" }}>
            Add Filter
          </Typography>
        </IconButton>
        <IconButton>
          <GroupIcon />
          <Typography sx={{ marginLeft: 1, color: "black" }}>
            Add Group
          </Typography>
        </IconButton>
      </Box>
      <Box
        mb={4}
        mt={2}
        sx={{
          border: "1px solid black",
          borderRadius: 1,
        }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
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
                <TableCell
                  align="left"
                  sx={{
                    padding: "14px 16px",
                    borderRight: "1px solid black",
                    backgroundColor: "#f9f9f9",
                    width: "10px",
                  }}>
                  <Box display="flex">
                    <IconButton>
                      <AddIcCallRoundedIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    padding: "14px 16px",
                    borderRight: "1px solid black",
                    backgroundColor: "#f9f9f9",
                    width: "10px",
                  }}>
                  <Box display="flex">
                    <IconButton>
                      <EmailRoundedIcon />
                    </IconButton>
                  </Box>
                </TableCell>

                <TableCell
                  sx={{
                    padding: "14px 16px",
                    borderRight: "1px solid black",
                    backgroundColor: "#f9f9f9",
                  }}>
                  <Box display="flex">
                    <Typography sx={{ fontWeight: 600, mt: 1 }}>
                      {" "}
                      Contacts
                    </Typography>
                    <IconButton sx={{ ml: "auto" }}>
                      <MoreHorizRoundedIcon />
                    </IconButton>
                  </Box>
                </TableCell>
                <TableCell
                  sx={{
                    padding: "14px 16px",
                    backgroundColor: "#f9f9f9",
                  }}>
                  <Box display="flex">
                    <Typography sx={{ fontWeight: 600, mt: 1 }}>
                      {" "}
                      Status
                    </Typography>
                    <IconButton sx={{ ml: "auto" }}>
                      <MoreHorizRoundedIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Leads.map((status, index) => (
                <TableRow key={index}>
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      borderRight: "1px solid black",
                      color: "blue",
                    }}>
                    <SplitscreenRounded sx={{ color: "black", mt: 1 }} />
                    {status.Name}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      padding: "14px 16px",
                      borderRight: "1px solid black",
                    }}>
                    <AddIcCallRoundedIcon />
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      padding: "14px 16px",
                      borderRight: "1px solid black",
                    }}>
                    <EmailRoundedIcon />
                  </TableCell>

                  <TableCell
                    sx={{
                      padding: "14px 16px",
                      borderRight: "1px solid black",
                    }}>
                    {status.Contacts}
                  </TableCell>
                  <TableCell
                    sx={{
                      padding: "14px 16px",
                    }}>
                    {status.Status}
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

const LeadsPage: React.FC = () => {
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

export default LeadsPage;
