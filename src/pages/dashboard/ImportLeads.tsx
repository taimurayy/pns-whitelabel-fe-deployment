import React from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
  IconButton,
  Divider,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";

const Importlead: React.FC = () => {
  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box
        width="20%"
        bgcolor="#f9f9f9"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        padding="20px"
        borderRight="1px solid #e0e0e0">
        <List sx={{ m: "auto" }}>
          {[
            "Verify email",
            "About yourself",
            "Your company",
            "Configuring inbox",
            "Add leads",
          ].map((text, index) => (
            <ListItem key={text}>
              <IconButton>
                {index === 4 ? (
                  <CircleRoundedIcon
                    sx={{
                      stroke: "black", // Use stroke to apply border color
                      strokeWidth: 2, // Adjust the border width if needed
                      fill: "none", // Make the circle transparent inside
                    }}
                  />
                ) : (
                  <CheckCircleRoundedIcon sx={{ color: "green" }} />
                )}
              </IconButton>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  style: {
                    color: "black",
                    // color: index === 4 ? "black" : "green",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 20,
          //   justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Would you like to import leads?
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          We didn't find any Leads in your Inbox. If you have some, you can
          import them now or start using Close with a few example Leads.
        </Typography>

        <Box display="flex" gap={2} mt={2}>
          <Button variant="outlined" disabled>
            Use Example Leads
          </Button>
          <Button variant="contained" color="primary">
            Import Leads
          </Button>
        </Box>

        <Box textAlign="center" mb={5} sx={{ mt: "auto", mr: "auto" }}>
          <Divider sx={{ backgroundColor: "black", width: "200%", mb: 3 }} />
          <Typography variant="body2">
            Logout ・ Need help or have a question?
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Importlead;
