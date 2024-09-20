import { createTheme } from "@mui/material/styles";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue color
    },
    secondary: {
      main: "#dc004e", // Red color
    },
    error: {
      main: "#f44336", // Red color for errors
    },
    warning: {
      main: "#ff9800", // Orange color for warnings
    },
    info: {
      main: "#2196f3", // Blue color for info
    },
    success: {
      main: "#4caf50", // Green color for success
    },
    background: {
      default: "#fafafa", // Background color for the application
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  spacing: 8, // Spacing unit (8px by default)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Custom border radius for buttons
          textTransform: "none", // Prevent uppercase transformation
        },
        contained: {
          backgroundColor: "#1976d2", // Default contained button color
          color: "#fff", // Text color for contained button
          "&:hover": {
            backgroundColor: "#1565c0", // Hover color for contained button
          },
        },
        outlined: {
          borderColor: "#1976d2",
          // Default outlined button border color
          color: "black", // Text color for outlined button
          "&:hover": {
            borderColor: "#1565c0", // Hover border color for outlined button
            color: "black", // Hover text color for outlined button
          },
        },
        text: {
          color: "#1976d2", // Default text button color
          "&:hover": {
            backgroundColor: "rgba(25, 118, 210, 0.08)", // Hover background color for text button
          },
        },
      },
    },
  },
});

export default theme;
