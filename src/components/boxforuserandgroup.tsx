import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"; // You can pass different icons as props

interface userandgroupbox {
  icon?: React.ReactNode;
  title: string;
  message: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const Genericbox: React.FC<userandgroupbox> = ({
  icon = <AccountCircleRoundedIcon sx={{ fontSize: "5rem" }} />, // Default icon
  title,
  message,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        height: "50vh",
        width: "90%",
        padding: 2,
        mt: 2,
        borderRadius: 2,
      }}>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          mt: 7,
        }}>
        {icon}
        <Box>
          <Typography sx={{ fontSize: "2rem" }}>{title}</Typography>
        </Box>
        <Typography sx={{ color: "gray" }} variant="body2">
          {message}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex", // Enable flexbox
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}>
        <Button
          sx={{
            m: "auto",
            mt: 2,
            border: "1px solid #4679e8",
            backgroundColor: "#4679e8",
            color: "white",
            ":hover": {
              backgroundColor: "#4679e8", // Keep the same color on hover
              border: "1px solid #4679e8", // Keep the same border on hover
            },
          }}
          onClick={onButtonClick}>
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default Genericbox;
