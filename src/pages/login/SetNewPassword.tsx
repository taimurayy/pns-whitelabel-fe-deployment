import React, { useState } from "react";
import GenericTextField from "../../components/TextField";
import { Box, Typography, IconButton, Alert, Snackbar } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GenericButton from "../../components/Button";
import { useNavigate } from "react-router-dom";
import setnew from "../../assets/Setpass.jpg";
import CheckIcon from "@mui/icons-material/Check";
const SetNewPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordAgain, setShowPasswordAgain] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [errors, setErrors] = useState<{
    password?: string;
    passwordagain?: string;
  }>({});
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/login");
    setOpen(false);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);

    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasLowercase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    let errorMessage = "";

    // Check for errors
    if (!value) {
      errorMessage = "Password is required";
    } else if (value.length < minLength) {
      errorMessage = `Password must be at least ${minLength} characters long`;
    } else if (
      !hasUppercase ||
      !hasLowercase ||
      !hasNumber ||
      !hasSpecialChar
    ) {
      errorMessage = `Password must include uppercase, lowercase, number, and special character`;
    } else {
      // Determine password strength

      // Clear error message if password is valid
      errorMessage = "";
    }

    // Set errors and strength
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: errorMessage,
    }));
  };

  const handlePasswordChangeAgain = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setPasswordAgain(value);

    // Check for errors
    let errorMessage = "";

    if (!value) {
      errorMessage = "Password confirmation is required";
    } else if (password !== value) {
      errorMessage = "Passwords do not match";
    }

    // Update errors state
    setErrors((prevErrors) => ({
      ...prevErrors,
      passwordagain: errorMessage,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!password) {
      newErrors.password = "Password is required";
    }
    if (!passwordAgain) {
      newErrors.passwordagain = "Password confirmation is required";
    } else if (password !== passwordAgain) {
      newErrors.passwordagain = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setFormErrors([]);
      // Handle form submission
      navigator.clipboard.writeText(password).then(() => {
        // Successfully copied to clipboard
        setAlertMessage("Password changed successfully");
        setOpen(true);
      });
      console.log("Form submitted:", { password });

      setPassword("");
      setPasswordAgain("");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", margin: "-8px" }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${setnew})`,
          backgroundSize: "cover", // Optional: to cover the entire Box
          backgroundPosition: "center", // Optional: center the image
          backgroundRepeat: "no-repeat",
          "@media (max-width: 1066px)": {
            display: "none", // Hide left side on smaller screens
          },
        }}
      />
      {/* Right side - Form */}
      <Box
        sx={{
          flex: 1,
          padding: 0,
          marginTop: "-120px",
          backgroundColor: "#FAF9F6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: {
              xs: "1rem", // Small screens
              sm: "1.5rem", // Medium screens
              md: "1.5rem", // Large screens
              lg: "1.7rem", // Extra-large screens
            },
            textAlign: "center",
          }}>
          Enter New Password
        </Typography>
        <br />
        <Box
          sx={{
            width: "55%",
            maxWidth: 600,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%" },
              maxWidth: 400,
              display: "flex",
              mx: "auto",
              flexDirection: "column",
              gap: 2,
            }}>
            <form onSubmit={handleSubmit}>
              <GenericTextField
                value={password}
                onChange={handlePasswordChange}
                label="New Password"
                type={showPassword ? "text" : "password"}
                helperText={errors.password}
                endAdornment={
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
                sx={{ marginBottom: 2 }}
              />
              <GenericTextField
                value={passwordAgain}
                onChange={handlePasswordChangeAgain}
                label="Confirm Password"
                type={showPasswordAgain ? "text" : "password"}
                helperText={errors.passwordagain}
                endAdornment={
                  <IconButton
                    onClick={() => setShowPasswordAgain(!showPasswordAgain)}
                    edge="end">
                    {showPasswordAgain ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
                sx={{ marginBottom: 2 }}
              />

              {formErrors.length > 0 && (
                <Box sx={{ marginTop: 2, color: "error.main" }}>
                  {formErrors.map((error, index) => (
                    <Typography key={index} variant="body2">
                      {error}
                    </Typography>
                  ))}
                </Box>
              )}

              <GenericButton
                onClick={() => console.log("Button clicked")}
                label="Confirm"
                variant="contained"
                color="custom" // For custom color
                type="submit"
                size="medium"
                sx={{
                  height: "56px",
                  width: "100%",
                  maxWidth: 400,
                  display: "block",
                  margin: "0 auto",
                  textTransform: "none",
                }}
              />
              {alertMessage && (
                <Snackbar
                  open={open}
                  autoHideDuration={1000}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  sx={{
                    "& .MuiSnackbarContent-root": {
                      alignItems: "center",
                      justifyContent: "center",
                    },
                  }}>
                  <Alert
                    onClose={() => setAlertMessage(null)}
                    severity={
                      alertMessage.startsWith("Failed") ? "error" : "success"
                    }
                    icon={<CheckIcon fontSize="inherit" />}
                    sx={{ marginBottom: 2 }}>
                    {alertMessage}
                  </Alert>
                </Snackbar>
              )}
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SetNewPassword;
