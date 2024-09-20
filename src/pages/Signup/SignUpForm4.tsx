import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";

import { ArrowBack } from "@mui/icons-material";
import CustomSlider from "../../components/CustomSlider"; // Reuse your CustomSlider component
import GenericButton from "../../components/Button"; // Reuse your GenericButton component
import GenericTextField from "../../components/TextField";
import GenericCheckbox from "../../components/Checkbox";
// import imagebird from "../../assets/bird.jpeg";
import { useNavigate } from "react-router-dom";
// For placeholder image
import signup4img from "../../assets/SignUp-4.jpg";

const SignUpForm4: React.FC = () => {
  const [industry, setIndustry] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [bookingDomain, setBookingDomain] = useState("");

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const navigate = useNavigate();
  const validateIndustry = (value: string) => {
    if (value.trim() === "") return "Industry is required";
    return "";
  };

  const validateBusinessName = (value: string) => {
    if (value.trim() === "") return "Business is required";
    return "";
  };

  const validateBookingDomain = (value: string) => {
    if (value.trim() === "") return "Booking domain is required";
    if (!/^[a-zA-Z0-9]+$/.test(value))
      return "Booking domain must contain only alphabets and numbers";
    return "";
  };
  const handleIndustryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setIndustry(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      industry: validateIndustry(value),
    }));
  };

  const handleBusinessNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setBusinessName(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      businessName: validateBusinessName(value),
    }));
  };

  const handleBookingDomainChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setBookingDomain(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      bookingDomain: validateBookingDomain(value),
    }));
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setCheckboxChecked(checked);
    setErrors((prevErrors) => ({
      ...prevErrors,
      checkbox: checked ? "" : "You must agree to terms & services",
    }));
  };
  const [errors, setErrors] = useState<{
    industry?: string;
    businessName?: string;
    bookingDomain?: string;

    checkbox?: string;
  }>({});

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: { [key: string]: string } = {};

    // Final validation on submit
    newErrors.industry = validateIndustry(industry);
    newErrors.businessName = validateBusinessName(businessName);
    newErrors.bookingDomain = validateBookingDomain(bookingDomain);

    newErrors.checkbox = checkboxChecked
      ? ""
      : "You must agree to terms & services";

    console.log(Object.keys(newErrors).length);
    console.log(
      errors.bookingDomain,
      errors.businessName,
      errors.checkbox,
      errors.industry
    );
    if (Object.keys(newErrors).some((key) => newErrors[key])) {
      setErrors(newErrors);
    } else {
      // Handle form submission
      console.log("Form submitted:", {
        industry,
        businessName,
        bookingDomain,
      });
      localStorage.setItem("industry", industry);
      localStorage.setItem("businessName", businessName);
      localStorage.setItem("bookingDomain", bookingDomain);

      // Reset form fields
      setIndustry("");
      setBusinessName("");
      setBookingDomain("");

      setCheckboxChecked(false);
      navigate("/sign-up-5");
    }
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", margin: "-8px" }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${signup4img})`,
          backgroundSize: "cover", // Optional: to cover the entire Box
          backgroundPosition: "center", // Optional: center the image
          backgroundRepeat: "no-repeat",
          "@media (max-width: 1066px)": {
            display: "none",
          },
        }}
      />
      {/* Background */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FAF9F6", // Background color for the whole page
          backgroundImage: `url("path_to_your_background_image.jpg")`, // Replace with your background image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        {/* Centered Container */}
        <IconButton
          onClick={() => navigate("/sign-up-3")} // Navigate to the previous page
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "text.primary",
            zIndex: 1, // Ensure it's on top of other elements
          }}>
          <ArrowBack />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}>
          <CustomSlider currentStep={4} />
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: {
                xs: "1.2rem", // Small screens
                sm: "1.5rem", // Medium screens
                md: "1.7rem", // Large screens
                lg: "2rem", // Extra-large screens
              },
              textAlign: "center", // Center the text
              mb: 2,
            }}>
            Let's create your account
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "90%",
              maxWidth: 500,
            }}>
            {/* Left Side - Form */}
            <Box
              sx={{
                flex: 1,
                padding: 2,

                backgroundColor: "#FAF9F6",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                margin: 2,
                // White background for the form container
              }}>
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%" },
                  maxWidth: 600,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}>
                <form
                  onSubmit={handleSubmit}
                  style={{ width: "100%", maxWidth: 600 }}>
                  <GenericTextField
                    value={industry}
                    onChange={handleIndustryChange}
                    label="Industry"
                    helperText={errors.industry}
                    type="text"
                    sx={{ marginBottom: 2 }}
                  />

                  <GenericTextField
                    value={businessName}
                    onChange={handleBusinessNameChange}
                    label="Business"
                    helperText={errors.businessName}
                    type="text"
                    sx={{ marginBottom: 2 }}
                  />
                  <GenericTextField
                    value={bookingDomain}
                    onChange={handleBookingDomainChange}
                    label="Domain Name"
                    helperText={errors.bookingDomain}
                    placeholder="example"
                    startAdornment="https://"
                    endAdornment=".my-app.com"
                    sx={{ marginBottom: 2 }}
                  />

                  <GenericCheckbox
                    checked={checkboxChecked}
                    onChange={handleCheckboxChange}
                    label="I agree to the terms and conditions"
                    sx={{
                      display: "flex",
                      alignItems: "left",
                      marginBottom: 2,
                    }}
                  />

                  {/* Conditionally display message */}
                  {!checkboxChecked && (
                    <Typography
                      sx={{
                        color: "red",
                        marginTop: -2,
                        marginBottom: 2,
                        textAlign: "left",
                        fontSize: "0.75rem",
                      }}>
                      {errors.checkbox}
                    </Typography>
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
                      backgroundColor: "primary",
                      width: "100%", // Full width
                      maxWidth: 600, // Optional: limit max width for better appearance
                      display: "block",
                      margin: "0 auto", // Center the button horizontally
                      textTransform: "none", // Prevents text from being capitalized
                    }}
                  />
                </form>
              </Box>
            </Box>
            {/* Right Side - Image */}

            {/* <Box
              sx={{
                flex: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#e0e0e0",
                backgroundImage: { imagebird },

                borderRadius: 2,
                height: "",
                marginTop: 2,

                minHeight: "0",
                position: "relative", // Add position relative for absolute child positioning
              }}></Box> */}
            {/* Input Field Positioned on Top of the Image */}
            {/* <Box
                sx={{
                  position: "absolute",
                  top: "-25%", // Adjust the vertical position as needed
                  left: "50%",
                  height: "",
                  transform: "translateX(-50%)",
                  width: "100%", // Adjust width as needed
                  backgroundColor: "", // Semi-transparent background
                  padding: 2,
                  borderRadius: 2,
                }}>
                <Box
                  sx={{
                    border: "0.5px solid #000",
                    height: "250px",

                    borderRadius: 2,
                  }}>
                  <GenericTextField
                    value={bookingDomain}
                    onChange={(e) => setBookingDomain(e.target.value)}
                    placeholder={bookingDomain}
                    startAdornment="https://"
                    endAdornment=".my-app.com"
                    disabled
                    sx={{
                      width: "90%",
                      marginTop: "10px",
                      backgroundColor: "#CCDEFC66",
                    }}
                  />
                  <img
                    src={imagebird}
                    alt="Description of the image" // Add a descriptive alt text
                    style={{
                      margin: 6,
                      width: "90%", // Adjust width as needed
                      height: "65%", // Maintain aspect ratio
                      maxWidth: "600px", // Optional: limit max width
                      borderRadius: "4px", // Optional: border radius
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    border: "0.5px solid black",
                    padding: 2,
                    borderRadius: 1,
                    maxWidth: 600,
                    marginTop: 2,

                    fontStyle: "italic",
                  }}>
                  <Typography variant="body1">
                    "This is a fantastic service! The team was highly
                    professional, and the quality of work exceeded my
                    expectations. Highly recommend!"
                  </Typography>
                </Box>
              </Box> */}

            {/* Placeholder Image Icon */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm4;
