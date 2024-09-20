import Layout from "../../components/Layout";
import { useState } from "react";
import GenericSelect from "../../components/Select";
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  IconButton,
  TextField,
  FormControlLabel,
  Button,
  Switch,
  Card,
  Divider,
  Grid,
  Breadcrumbs,
} from "@mui/material";
import { Link } from "@mui/material";
import SMTPForm from "../../components/SMTPForm";
import { SelectChangeEvent } from "@mui/material";
import CopyButton from "../../components/CopyButton";
import GoogleIcon from "@mui/icons-material/Google";
import CloseIcon from "@mui/icons-material/Close";
import {
  Settings as SettingsIcon,
  Label as LabelIcon,
  Api as ApiIcon,
} from "@mui/icons-material";

export default function Settings() {
  const [value, setValue] = useState(0);
  // const [containerHeight, setContainerHeight] =
  //   useState<string>("calc(100vh - 80px)");
  const [showCard, setShowCard] = useState(false);

  const handleSetupClick = () => {
    setShowCard(true);
  };
  const handleCloseCard = () => {
    setShowCard(false);
  };

  const [isSMTPChecked, setIsSMTPChecked] = useState(false);
  const dateFormatOptions = [
    { value: "MMMM D, YYYY", label: "MMMM D, YYYY" },
    { value: "MM/DD/YYYY", label: "MM/DD/YYYY" },
    { value: "YYYY-MM-DD", label: "YYYY-MM-DD" },
    { value: "DD-MM-YYYY", label: "DD-MM-YYYY" },
    { value: "YYYY/MM/DD", label: "YYYY/MM/DD" },
    { value: "D MMM, YYYY", label: "D MMM, YYYY" },
    { value: "YYYY MMM D", label: "YYYY MMM D" },
  ];

  const handleSMTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsSMTPChecked(checked);
  };

  const [dateFormat, setDateFormat] = useState("MMMM D, YYYY");
  const handleDateFormatChange = (
    event: SelectChangeEvent<string> // Update to SelectChangeEvent<string>
  ) => {
    setDateFormat(event.target.value);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(event.target);
    setValue(newValue);
  };

  const TabPanel = (props: {
    children?: React.ReactNode;
    index: number;
    value: number;
  }) => {
    const { children, value, index } = props;
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        sx={{
          p: 2,
          height: "100%", // Ensure it fills the container
          overflow: "auto",
        }}>
        {children}
      </Box>
    );
  };

  const getHeading = (index: number) => {
    switch (index) {
      case 0:
        return "General";
      case 1:
        return "White Label";
      case 2:
        return "API Settings";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1400,
          // hheight: containerHeight,
          display: "flex",
          flexDirection: "column",
          p: 2,
          marginLeft: "-18px",
          marginBottom: 10,
        }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 4 }}>
          <Typography
            color="grey"
            sx={{ fontSize: "1.25rem", display: "inline" }}>
            {"Settings"}
          </Typography>
          <Typography
            sx={{ color: "black", fontSize: "1.25rem", display: "inline" }}>
            {getHeading(value)}
          </Typography>
        </Breadcrumbs>

        <Box sx={{ display: "flex", height: "100%", flexGrow: 1 }}>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexGrow: 1,
              height: "60%",
              borderRadius: 2,
              overflow: "hidden",
              maxHeight: { md: "100%" }, // Adjust height for smaller screens
              flexDirection: { xs: "column", md: "row" }, // Responsive direction
              border: "none", // Remove line between sections
            }}>
            {/* Tabs with Icons */}
            <Box
              sx={{
                width: { xs: "100%", md: 200 },
                borderRight: { md: "none" }, // Remove border on larger screens
                display: "flex",
                flexDirection: "column",
                p: { xs: 1, md: 2 },
                overflow: "auto",
              }}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="settings tabs"
                sx={{ height: "100%" }}>
                <Tab
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center", // Center items vertically
                        justifyContent: "flex-start", // Align items to the left horizontally
                        flexDirection: "row", // Ensure items are in a row
                        textAlign: "left", // Align text to the left
                        width: "100%", // Ensure full width
                      }}>
                      <SettingsIcon sx={{ mr: 1 }} />
                      <Typography>General</Typography>
                    </Box>
                  }
                />
                <Tab
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center", // Center items vertically
                        justifyContent: "flex-start", // Align items to the left horizontally
                        flexDirection: "row", // Ensure items are in a row
                        textAlign: "left", // Align text to the left
                        width: "100%", // Ensure full width
                      }}>
                      <LabelIcon sx={{ mr: 1 }} />
                      <Typography>White Label</Typography>
                    </Box>
                  }
                />
                <Tab
                  label={
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center", // Center items vertically
                        justifyContent: "flex-start", // Align items to the left horizontally
                        flexDirection: "row", // Ensure items are in a row
                        textAlign: "left", // Align text to the left
                        width: "100%", // Ensure full width
                      }}>
                      <ApiIcon sx={{ mr: 1 }} />
                      <Typography>API</Typography>
                    </Box>
                  }
                />
              </Tabs>
            </Box>

            {/* Panels */}
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "auto",
                p: 2, // Padding around the panel content
              }}>
              <TabPanel value={value} index={0}>
                <Typography variant="h6">General Settings</Typography>

                {/* Select Component */}
                <GenericSelect
                  value={dateFormat}
                  onChange={handleDateFormatChange}
                  options={dateFormatOptions}
                  label="Date Format"
                  helperText="This option will be used for your settings and as default setting for all clients."
                  sx={{
                    marginTop: 2,
                    width: "60%",
                    // Other styles if needed
                    "& .MuiFormHelperText-root": {
                      color: "grey",
                      fontSize: "0.6rem",
                    },
                  }}
                />

                {/* Divider */}
                <Box sx={{ my: 1 }}>
                  <Divider />
                </Box>
                <Typography sx={{ color: "grey", fontSize: "0.5rem" }}>
                  SMTP EMAIL
                </Typography>
                {/* Checkbox */}
                <FormControlLabel
                  control={
                    <Switch
                      checked={isSMTPChecked}
                      onChange={handleSMTPChange}
                    />
                  }
                  label="Use custom SMTP settings"
                />
                {isSMTPChecked && <SMTPForm />}

                <Typography sx={{ color: "grey", fontSize: "0.6rem" }}>
                  Will be used as default settings for all clients. SMTP
                  settings can be overridden for each client.
                </Typography>
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Typography sx={{ fontSize: "1rem" }}>White Label</Typography>
                <Typography sx={{ fontSize: "0.8rem" }}>
                  The listed integrations currently display the Trafft trademark
                  which your clients will see when they attempt to connect their
                  accounts. To achieve full white labeling, you should first
                  enable it and then follow the provided documentation.
                </Typography>

                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                  onClick={handleSetupClick}>
                  Set Up
                </Button>

                {showCard && (
                  <Card
                    sx={{
                      mt: 2,
                      p: 2,
                      position: "relative",
                    }}>
                    <IconButton
                      onClick={handleCloseCard}
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                      }}>
                      <CloseIcon />
                    </IconButton>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item>
                        <GoogleIcon />{" "}
                        {/* Replace with the actual Google Meet icon */}
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body2">
                          To connect your account, please follow the steps in
                          the documentation.
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={2} alignItems="center">
                      <Grid item xs={4}>
                        <TextField
                          label="Client ID"
                          variant="outlined"
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          label="Client Secret"
                          variant="outlined"
                          fullWidth
                          type="password"
                          required
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          variant="contained"
                          color="primary"
                          fullWidth
                          sx={{ height: "56px" }}>
                          Connect Account
                        </Button>
                      </Grid>
                    </Grid>
                  </Card>
                )}
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography variant="h6">API Settings</Typography>
                <Typography sx={{ color: "grey", fontSize: "0.8rem" }}>
                  To connect to your API, please follow steps in the{" "}
                  <Link
                    href="https://documenter.getpostman.com/view/1487056/2sA3kaDK9F"
                    underline="hover"
                    sx={{ color: "primary.main" }}>
                    documentation
                  </Link>
                  .
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <TextField
                    fullWidth
                    label="Client ID"
                    defaultValue="7cee4ea0094ea620aa34263a057e4f9"
                    margin="normal"
                    disabled
                    sx={{ flexGrow: 1 }}
                  />
                  <CopyButton text="7cee4ea0094ea620aa34263a057e4f9" />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <TextField
                    fullWidth
                    label="Client Secret"
                    disabled
                    defaultValue="A4f556e112dc66e0a2b64823d2bc5e6"
                    margin="normal"
                    sx={{ flexGrow: 1 }}
                  />
                  <CopyButton text="A4f556e112dc66e0a2b64823d2bc5e6" />
                </Box>
              </TabPanel>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Layout>
  );
}
