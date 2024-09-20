import React, { useState } from "react";
import { Box, Typography, Divider, IconButton } from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Apple,
  Google,
  // ArrowBack,
} from "@mui/icons-material";
import GenericButton from "../../components/Button";
import EmailField from "../../components/EmailField";
import { useNavigate } from "react-router-dom";
import login from "../../assets/Login.jpg";
const Login1: React.FC = () => {
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ email?: string }>({});
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);

    // Validate email on change
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else if (!emailRegex.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
      isValid = false;
    }

    if (isValid) {
      setFormErrors([]);
      console.log("Form submitted:", { email });

      navigate(`/login2?email=${encodeURIComponent(email)}`);
      setEmail("");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", margin: "-8px" }}>
      {/* Left side - Conditional display based on resolution */}
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${login})`,
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
        {/* <IconButton
          onClick={() => navigate("/")} // Navigate to the previous page
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "text.primary",
            zIndex: 1, // Ensure it's on top of other elements
          }}>
          <ArrowBack />
        </IconButton> */}

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
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}>
          <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}>
            <IconButton
              sx={{
                color: "primary.main",
                border: "2px solid", // Border width and style
                borderColor: "primary.main", // Border color matching the icon color
                borderRadius: "50%", // Make the border round
                padding: 1, // Add some space inside the border
              }}>
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                color: "primary.main",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: "50%",
                padding: 1,
              }}>
              <LinkedIn />
            </IconButton>
            <IconButton
              sx={{
                color: "primary.main",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: "50%",
                padding: 1,
              }}>
              <Apple />
            </IconButton>
            <IconButton
              sx={{
                color: "primary.main",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: "50%",
                padding: 1,
              }}>
              <Google />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Divider sx={{ flex: 1 }} />
            <Typography sx={{ mx: 2 }}>or</Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%" },
              maxWidth: 400,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}>
            <form onSubmit={handleSubmit}>
              <EmailField
                value={email}
                onChange={handleEmailChange}
                label="Email Address"
                helperText={errors.email}
                sx={{ marginTop: 2, marginBottom: 2 }}
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
                label="Continue with Email"
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
              Don't have an account?{" "}
              <a href="/sign-up-1" color="primary">
                Sign up
              </a>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login1;
