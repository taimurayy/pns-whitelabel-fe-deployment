import React from "react";
import {
  Box,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Paper,
} from "@mui/material";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";
interface User {
  avatarInitials: string;
  name: string;
  role: string;
  email: string;
  twoFactorAuth: string;
  callRecording: string;
  sendAs: string;
}

const users: User[] = [
  {
    avatarInitials: "BH",
    name: "Brock Hudgens",
    role: "Admin",
    email: "developer@playnsports.com",
    twoFactorAuth: "2FA",
    callRecording: "Call Recording",
    sendAs: "Send as",
  },
  {
    avatarInitials: "BH",
    name: "Brock Hudgens",
    role: "Admin",
    email: "developer@playnsports.com",
    twoFactorAuth: "2FA",
    callRecording: "Call Recording",
    sendAs: "Send as",
  },
  {
    avatarInitials: "TF",
    name: "Taimur Fazli",
    role: "Dev",
    email: "developer@playnsports.com",
    twoFactorAuth: "2FA",
    callRecording: "Call Recording",
    sendAs: "Send as",
  },
];

const UserTable: React.FC<{ onUserCountChange: (count: number) => void }> = ({
  onUserCountChange,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );
  React.useEffect(() => {
    console.log(filteredUsers.length);
    onUserCountChange(filteredUsers.length);
  }, [filteredUsers, onUserCountChange]);
  return (
    <Box p={3}>
      {/* Filter Input */}
      <TextField
        label="Filter Users..."
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 3, width: "300px" }}
      />

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          {/* Table Head */}
          <TableHead sx={{ backgroundColor: "#f9f9f9" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: 900 }}>User</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>Role</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>Email & Phone</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>2FA</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>Call Recording</TableCell>
              <TableCell sx={{ fontWeight: 900 }}>Send As</TableCell>
            </TableRow>
          </TableHead>

          {/* Table Body */}
          <TableBody sx={{ backgroundColor: "#fcfcfc" }}>
            {filteredUsers.map((user, index) => (
              <TableRow key={index}>
                {/* User Information */}
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar sx={{ mr: 2, backgroundColor: "red" }}>
                      {user.avatarInitials}
                    </Avatar>
                    <Typography variant="body1" fontWeight="bold">
                      {user.name}
                    </Typography>
                  </Box>
                </TableCell>

                {/* Role */}
                <TableCell>{user.role}</TableCell>

                {/* Email & Phone */}
                <TableCell>
                  <Typography
                    variant="body2"
                    color="primary"
                    sx={{ textDecoration: "underline", cursor: "pointer" }}>
                    {user.email}
                  </Typography>
                </TableCell>

                {/* 2FA */}
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ color: "#919191" }}>
                    {user.twoFactorAuth}
                    <InfoOutlinedIcon sx={{ ml: 1, fontSize: "small" }} />
                  </Box>
                </TableCell>

                {/* Call Recording */}
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ color: "#919191" }}>
                    {user.callRecording}
                    <InfoOutlinedIcon sx={{ ml: 1, fontSize: "small" }} />
                  </Box>
                </TableCell>

                {/* Send As */}
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                    sx={{ color: "#919191" }}>
                    {user.sendAs}
                    <InfoOutlinedIcon sx={{ ml: 1, fontSize: "small" }} />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserTable;
