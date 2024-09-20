import React, { useState } from "react";
import GenericTextField from "../../components/TextField";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBack, Visibility, VisibilityOff } from "@mui/icons-material";
import GenericButton from "../../components/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import login2 from "../../assets/Login2.jpg";
const Login2: React.FC = () => {
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(); // Initialize useSearchParams
  const email = searchParams.get("email");

  // Function to handle slider change

  const [errors, setErrors] = useState<{
    password?: string;
  }>({});
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPassword(value);

    // Simple validation
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(email);
    const newErrors: { [key: string]: string } = {};

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setFormErrors([]);
      console.log("Form submitted:", { password });

      setPassword("");

      navigate("/dashboard");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", margin: "-8px" }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${login2})`,
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
            textAlign: "center", // Optional: center the text
          }}>
          Login to your account.
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
              display: "flex",
              alignItems: "center",
              maxwidth: "600px",
            }}></Box>
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
              <IconButton
                onClick={() => navigate("/login")} // Navigate to the previous page
                sx={{
                  color: "text.primary",

                  zIndex: 1, // Ensure it's on top of other elements
                  "&:hover": {
                    backgroundColor: "inherit", // No background change on hover
                    color: "text.primary", // Maintain the same text color on hover
                    boxShadow: "none", // Remove any box shadow on hover
                  },
                }}>
                <ArrowBack />
                <Typography sx={{ marginLeft: 0 }}> Back to login</Typography>
              </IconButton>
              <GenericTextField
                value={password}
                onChange={handlePasswordChange}
                label="Password"
                type={showPassword ? "text" : "password"}
                helperText={errors.password}
                endAdornment={
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
                sx={{ marginBottom: 2, marginTop: 1 }}
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
                label="Continue"
                variant="contained"
                color="custom" // For custom color
                type="submit"
                size="medium"
                sx={{
                  height: "56px",

                  width: "100%", // Full width
                  maxWidth: 400, // Optional: limit max width for better appearance
                  display: "block",
                  margin: "0 auto", // Center the button horizontally
                  textTransform: "none", // Prevents text from being capitalized
                }}
              />
            </form>

            <Typography
              variant="body2"
              textAlign="center"
              color="textSecondary"
              sx={{ mt: 2 }}>
              Forgot your password?{" "}
              <a href="/reset-password" color="primary">
                Get help
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login2;
