import React from "react";
import {
  Box,
  Typography,
  Paper,
  MenuItem,
  Grid,
  Chip,
  IconButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  TableCell,
  Table,
  TableContainer,
  TableBody,
  TableRow,
} from "@mui/material";

import WarningIcon from "@mui/icons-material/Warning";
import EditIcon from "@mui/icons-material/Edit";
import PublishIcon from "@mui/icons-material/Publish";
import SmsIcon from "@mui/icons-material/Sms";
import AgentIcon from "@mui/icons-material/Group";
import DeleteIcon from "@mui/icons-material/Delete";

import Menu from "@mui/material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const DataTable: React.FC = () => {
  const options = [
    { label: "Edit Client", icon: <EditIcon /> },
    { label: "Go Live", icon: <PublishIcon /> },
    { label: "Add SMS Credit", icon: <SmsIcon /> },
    { label: "Access as Agent", icon: <AgentIcon /> },
    { label: "Delete Client", icon: <DeleteIcon /> },
  ];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  function createData(
    tech_business_name: string,
    demo_license: string,
    employees: string,
    services: string,
    features_and_integrations: string,
    sms_credits: string
  ) {
    return {
      tech_business_name,
      demo_license,
      employees,
      services,
      features_and_integrations,
      sms_credits,
    };
  }
  const rows = [
    createData(
      "brock.hudgens@gmail.com",
      "Active since August 12, 2024",
      "1 / ∞",
      "15 / ∞",
      "11 / ∞",
      "0 left"
    ),
  ];
  return (
    <Box sx={{ mt: 4 }}>
      {isSmallScreen ? (
        // Render as vertical stack on small screens
        rows.map((row) => (
          <Paper
            key={row.tech_business_name}
            sx={{ mb: 2, p: 2, marginBottom: { sm: 10, xs: 10 } }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ fontSize: "0.8rem", fontWeight: "400" }}>
                  Tech Business Name
                  <Chip
                    label="Demo"
                    color="default"
                    sx={{
                      backgroundColor: "orange",
                      color: "black",
                      marginLeft: 1,
                      fontWeight: "normal",
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    color: "grey",
                    borderBottom: "1px solid grey",
                  }}>
                  {row.tech_business_name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ fontWeight: "400" }}>Demo License</Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    color: "grey",
                    borderBottom: "1px solid grey",
                  }}>
                  {row.demo_license}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ fontWeight: "400" }}>Employees</Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    borderBottom: "1px solid grey",
                  }}>
                  {row.employees}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ fontWeight: "400" }}>Services</Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    borderBottom: "1px solid grey",
                  }}>
                  {row.services}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography sx={{ fontWeight: "400" }}>
                  Features and Integrations
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    borderBottom: "1px solid grey",
                  }}>
                  {row.features_and_integrations}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Typography>Sms Credits</Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: "400",
                    color: "grey",
                    borderBottom: "1px solid grey",
                  }}>
                  {row.sms_credits}
                  <IconButton color="error" size="small">
                    <WarningIcon />
                  </IconButton>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}>
                  <MoreHorizIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    "aria-labelledby": "long-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    paper: {
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "30ch",
                      },
                    },
                  }}>
                  {options.map((option) => (
                    <MenuItem
                      key={option.label}
                      selected={option.label === ""}
                      onClick={handleClose}>
                      <ListItemIcon>{option.icon}</ListItemIcon>
                      <ListItemText primary={option.label} />
                    </MenuItem>
                  ))}
                </Menu>
              </Grid>
            </Grid>
          </Paper>
        ))
      ) : (
        // Render as table on larger screens
        <Paper>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.tech_business_name}>
                    <TableCell component="th" scope="row">
                      <Typography sx={{ fontWeight: "400" }} variant="body2">
                        Tech Business Name
                        <Chip
                          label="Demo"
                          color="default"
                          sx={{
                            backgroundColor: "orange",
                            color: "black",
                            marginLeft: 1,
                            fontWeight: "normal",
                          }}
                        />
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: "400",
                          color: "grey",
                        }}>
                        {row.tech_business_name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ fontWeight: "400" }} variant="body2">
                        Demo License
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: "400",
                          color: "grey",
                        }}>
                        {row.demo_license}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: "400" }}>
                        Employees
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: "400",
                          borderBottom: "1px solid grey",
                        }}>
                        {row.employees}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: "400" }}>
                        Services
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: "400",
                          borderBottom: "1px solid grey",
                        }}>
                        {row.services}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontWeight: "400" }}>
                        Features and Integrations
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: "400",
                          borderBottom: "1px solid grey",
                        }}>
                        {row.features_and_integrations}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ marginTop: 1 }}>
                        Sms Credits
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "0.8rem",
                          fontWeight: "400",
                          color: "grey",
                        }}>
                        {row.sms_credits}
                        <IconButton color="error" size="small">
                          <WarningIcon />
                        </IconButton>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}>
                        <MoreHorizIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                          paper: {
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: "30ch",
                            },
                          },
                        }}>
                        {options.map((option) => (
                          <MenuItem
                            key={option.label}
                            selected={option.label === ""}
                            onClick={handleClose}>
                            <ListItemIcon>{option.icon}</ListItemIcon>
                            <ListItemText primary={option.label} />
                          </MenuItem>
                        ))}
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Box>
  );
};

export default DataTable;
