import React from "react";
import { Box, IconButton } from "@mui/material";
import { Circle as CircleIcon } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { blue, grey } from "@mui/material/colors";

interface CustomSliderProps {
  currentStep: number;
}

const getCircleColor = (step: number, currentStep: number) => {
  if (step < currentStep) return blue[800]; // Color for completed steps
  if (step === currentStep) return blue[800]; // Color for current step
  return grey[400]; // Color for upcoming steps
};

const CustomSlider: React.FC<CustomSliderProps> = ({ currentStep }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: {
          xs: "40%",
          sm: "40%",
          md: "50%",
          lg: "55%",
        },
        maxWidth: 400, // Maximum width of the slider
        justifyContent: "space-between",
        position: "relative",
        margin: "0 auto", // Center the slider horizontally
      }}>
      {/* Line connecting circles */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: 8, sm: 12 }, // Responsive left margin
          right: { xs: 8, sm: 12 }, // Responsive right margin
          height: 2,
          backgroundColor: grey[400], // Line color
          zIndex: 0,
          // Rounded corners
        }}
      />
      {[1, 2, 3, 4, 5].map((step) => (
        <Box
          key={step}
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            cursor: "default", // Prevent cursor change on hover
            width: "auto", // Allow box to adjust based on content
          }}>
          <IconButton
            sx={{
              color: getCircleColor(step, currentStep), // Dynamic color based on step
              zIndex: 1,
              pointerEvents: "none", // Disable pointer events to prevent clicking
              width: { xs: 24, sm: 32, md: 40 }, // Responsive icon size
              height: { xs: 24, sm: 32, md: 40 }, // Responsive icon size
              display: "flex", // Center the content
              justifyContent: "center",
              alignItems: "center",
            }}>
            {step < currentStep ? (
              <CheckCircleIcon
                sx={{ backgroundColor: "#FAF9F6", opacity: 2 }}
              />
            ) : (
              <CircleIcon />
            )}{" "}
            {/* Show CheckIcon for completed steps */}
          </IconButton>
          {/* Optional label */}
          {/* <Typography variant="caption">{`Step ${step}`}</Typography> */}
        </Box>
      ))}
    </Box>
  );
};

export default CustomSlider;
