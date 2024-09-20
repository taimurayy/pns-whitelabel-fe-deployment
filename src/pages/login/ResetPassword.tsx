import React, { useState } from "react";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import GenericButton from "../../components/Button";
import { useNavigate } from "react-router-dom";
import EmailField from "../../components/EmailField";
import reset from "../../assets/Reset.jpg";
const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP input state
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const [errors, setErrors] = useState<{ email?: string; otp?: string }>({});
  const [loading, setLoading] = useState(false); // Loading state
  const [successMessage, setSuccessMessage] = useState(""); // Success message state
  const [isSubmitted, setIsSubmitted] = useState(true); // Submission state
  const [showOtpInput, setShowOtpInput] = useState(false); // Show OTP input field state
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
  const handleEmailSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    type Errors = { [key: string]: string };

    const newErrors: Errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setFormErrors([]);
      setLoading(true); // Start loading
      setTimeout(() => {
        setLoading(false); // Stop loading
        setSuccessMessage("An email has been sent to reset your password."); // Show success message
        setIsSubmitted(true); // Mark form as submitted
        setShowOtpInput(true); // Show OTP input field
        setOtp(["", "", "", "", "", ""]); // Clear OTP input
      }, 2000); // Simulate API call delay
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field when current field is filled
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`)?.focus();
      }
    }
  };
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      // Move focus to the previous input field when backspace is pressed and the current field is empty
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    } else if (event.key === "ArrowRight" && index < otp.length - 1) {
      // Move focus to the next input field when arrow right is pressed
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    } else if (event.key === "ArrowLeft" && index > 0) {
      // Move focus to the previous input field when arrow left is pressed
      document.getElementById(`otp-input-${index - 1}`)?.focus();
    }
  };

  const handleOtpSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const otpString = otp.join("");
    if (otpString.length !== 6 || isNaN(Number(otpString))) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        otp: "Invalid OTP. It should be 6 digits.",
      }));
    } else {
      setErrors({});
      navigate("/set-new-password");
      // Handle OTP submission (e.g., validate OTP)
      console.log("OTP submitted:", otpString);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "120vh", margin: "-8px" }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${reset})`,
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
          marginTop: "-150px",
          marginBottom: 10,
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
            textAlign: "center", // Center the text
          }}>
          Forgot your password?
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
              maxWidth: "600px",
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
            <form onSubmit={showOtpInput ? handleOtpSubmit : handleEmailSubmit}>
              {isSubmitted && !showOtpInput ? (
                <>
                  <Typography
                    sx={{
                      mx: "auto",
                      fontWeight: "light",
                      marginBottom: 2,
                      textAlign: "center",
                    }}>
                    Enter your email address below and we'll get you back on
                    track.
                  </Typography>
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
                    <Typography sx={{ marginLeft: 0 }}>
                      Back to login
                    </Typography>
                  </IconButton>
                  <EmailField
                    value={email}
                    onChange={handleEmailChange}
                    label="Email Address"
                    helperText={errors.email}
                    sx={{ marginTop: 1, marginBottom: 2 }}
                  />
                </>
              ) : (
                <>
                  <Typography
                    sx={{
                      mx: "auto",
                      fontWeight: "light",
                      marginBottom: 2,
                      textAlign: "center",
                    }}>
                    Enter the 6-digit OTP sent to your email.
                  </Typography>
                  <Box
                    sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                    {otp.map((digit, index) => (
                      <TextField
                        key={index}
                        id={`otp-input-${index}`}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) =>
                          handleKeyDown(
                            e as React.KeyboardEvent<HTMLInputElement>,
                            index
                          )
                        }
                        inputProps={{
                          maxLength: 1,
                          type: "text",
                          pattern: "[0-9]*",
                        }} // Change type to "text" and use pattern for numeric input
                        sx={{
                          width: 60,
                          height: 60,
                          mx: 0,
                          borderRadius: 1,
                          borderColor: "primary.main",
                          borderWidth: 2,
                          "& .MuiInputBase-input": {
                            fontSize: "1.5rem",
                            textAlign: "center", // Center text inside the input
                            padding: 0,
                            WebkitAppearance: "none", // Hide spinners in WebKit browsers
                            MozAppearance: "textfield", // Hide spinners in Firefox
                          },
                          // Hide spinners in some other browsers
                          "& input[type='number']::-webkit-inner-spin-button, & input[type='number']::-webkit-outer-spin-button":
                            {
                              WebkitAppearance: "none",
                              margin: 0,
                            },
                        }}
                      />
                    ))}
                  </Box>
                </>
              )}

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
                label={
                  loading ? "loading..." : showOtpInput ? "Submit OTP" : "Reset"
                }
                variant="contained"
                color="custom" // For custom color
                type="submit"
                size="medium"
                disabled={
                  loading ||
                  (showOtpInput && otp.some((digit) => digit.length === 0))
                }
                sx={{
                  marginTop: 1,
                  height: "56px",
                  textTransform: "none",
                  width: "100%",
                }}
              />

              {successMessage && (
                <Box
                  sx={{
                    marginTop: 2,
                    color: "success.main",
                    textAlign: "center",
                  }}>
                  {successMessage}
                </Box>
              )}
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
