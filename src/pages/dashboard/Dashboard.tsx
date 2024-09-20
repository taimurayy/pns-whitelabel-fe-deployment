import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
} from "@mui/material";
import DataTable from "../../components/DataTable";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import CardFeild from "../../components/CardFeild";
import Layout from "../../components/Layout";
const username = "John Doe";
const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Box>
        <CardFeild username={username} />
      </Box>
      {/* Action Buttons & Search */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",

          alignItems: "center",
          mt: 4,
        }}>
        {/* Create Client Button */}

        {/* Filter & Search Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 2,
          }}>
          {/* License Filter */}
          {/* Search Field */}
          <TextField
            variant="outlined"
            size="small"
            label="Search"
            sx={{
              width: { xs: "100%", sm: "600px" }, // Full width on small screens, fixed width on larger screens
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <FormControl variant="outlined" sx={{ minWidth: 240 }}>
            <InputLabel>All licenses</InputLabel>
            <Select label="All licenses" defaultValue="">
              <MenuItem value="all">All licenses</MenuItem>
              <MenuItem value="demo">Demo</MenuItem>
              <MenuItem value="live">Live</MenuItem>
            </Select>
          </FormControl>

          {/* Date Sorter */}
          <FormControl variant="outlined" sx={{ minWidth: 240 }}>
            <InputLabel>Date Ascending</InputLabel>
            <Select label="Date Ascending" defaultValue="">
              <MenuItem value="asc">Date Ascending</MenuItem>
              <MenuItem value="desc">Date Descending</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <DataTable />
      </Box>
      <Box sx={{ marginTop: 4 }}>
        <Divider />
      </Box>
    </Layout>
  );
};

export default Dashboard;
