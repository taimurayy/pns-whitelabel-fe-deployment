import React, { useState } from "react";
import {
  Switch,
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

interface Role {
  id: number;
  name: string;
  description: string;
  allowed: boolean;
  disabled: boolean; // To control if the switch should be disabled
}

interface RolePageProps {
  initialRoles: Role[];
}

const RolePage: React.FC<RolePageProps> = ({ initialRoles }) => {
  // State for roles
  const [roles, setRoles] = useState<Role[]>(initialRoles);

  // Handle switch change
  const handleSwitchChange = (id: number) => {
    setRoles((prevRoles) => {
      const updatedRoles = prevRoles.map((role) =>
        role.id === id ? { ...role, allowed: !role.allowed } : role
      );

      // Check if the first permission is allowed
      const isFirstAllowed = updatedRoles[0].allowed;

      // Update the disabled state of other roles based on the first role
      return updatedRoles.map((role, index) => {
        if (index !== 0) {
          return { ...role, disabled: !isFirstAllowed };
        }
        return role;
      });
    });
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 1000, mb: 5 }}>
      <TableContainer>
        <Table>
          <TableBody>
            {roles.map((role) => (
              <TableRow
                key={role.id}
                sx={{
                  backgroundColor: role.id === 1 ? "#f9f9f9" : "transparent",
                }}>
                <TableCell>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={role.allowed}
                        onChange={() => handleSwitchChange(role.id)}
                        disabled={role.disabled}
                        sx={{ mr: -14 }}
                      />
                    }
                    label="" // You can provide a label here if needed
                  />
                </TableCell>
                <TableCell sx={{ color: "black" }}>
                  <Typography sx={{ fontWeight: role.id === 1 ? 800 : 400 }}>
                    {role.name}
                  </Typography>
                  <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>
                    {role.description}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default RolePage;
