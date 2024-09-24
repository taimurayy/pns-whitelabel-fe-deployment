import React from "react";
import { Button, Container, Typography, Box, Link } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const SchedulingLinksComp: React.FC = () => {
  return (
    <Container
      // maxWidth="md"
      sx={{
        textAlign: "center",
        mt: 5,
        border: "1px solid",
        borderRadius: "8px",
        width: "100%",
        ml: -2,
        height: "500px",
        p: 3,
      }}>
      {/* Heading */}
      <Box sx={{ mt: 25, mb: 5 }}>
        <Box sx={{ maxWidth: "sm", m: "auto" }}>
          <Typography variant="h5" gutterBottom>
            Scheduling Links
          </Typography>

          {/* Subtext */}

          <Typography variant="body1" color="textSecondary" paragraph>
            Effortlessly add your scheduling links to your emails and allow
            others to schedule meetings with you.
          </Typography>

          {/* Learn More Link */}
          <Link href="#" color="primary" underline="hover">
            Learn More
          </Link>

          {/* Buttons Section */}
          <Box
            sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
            {/* New Scheduling Link Button */}
            <Button variant="outlined" startIcon={<AddIcon />}>
              New Scheduling Link
            </Button>

            <Typography variant="body2" sx={{ alignSelf: "center" }}>
              or
            </Typography>

            {/* Connect with Calendly Button */}
            <Button variant="outlined" startIcon={<CalendarTodayIcon />}>
              Connect with Calendly
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default SchedulingLinksComp;
