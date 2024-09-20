import React, { useState } from "react";
import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import GenericButton from "../../components/Button";
import CustomSlider from "../../components/CustomSlider";
import lightImage from "../../assets/light.png";
import blossomImage from "../../assets/blossom.png";
import everestImage from "../../assets/everest.png";
import oceanImage from "../../assets/ocean.png";
import darkImage from "../../assets/dark.png";
import honeycombImage from "../../assets/honeycomb.png";
import brooklynImage from "../../assets/brooklyn.png";
import neoImage from "../../assets/neo.png";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const themes = [
  {
    name: "Light",
    imageUrl: lightImage,
    primaryColor: "#FFFFFF",
    secondaryColor: "#F0F0F0",
  },
  {
    name: "Blossom",
    imageUrl: blossomImage,
    primaryColor: "#FFC0CB",
    secondaryColor: "#FFB6C1",
  },
  {
    name: "Everest",
    imageUrl: everestImage,
    primaryColor: "#4B6A9A",
    secondaryColor: "#2E3A47",
  },
  {
    name: "Ocean",
    imageUrl: oceanImage,
    primaryColor: "#0077B6",
    secondaryColor: "#00B4D8",
  },
  {
    name: "Dark",
    imageUrl: darkImage,
    primaryColor: "#333333",
    secondaryColor: "#666666",
  },
  {
    name: "Honeycomb",
    imageUrl: honeycombImage,
    primaryColor: "#F1C40F",
    secondaryColor: "#F39C12",
  },
  {
    name: "Brooklyn",
    imageUrl: brooklynImage,
    primaryColor: "#1E2A38",
    secondaryColor: "#1D3C56",
  },
  {
    name: "Neo",
    imageUrl: neoImage,
    primaryColor: "#2C3E50",
    secondaryColor: "#34495E",
  },
];

const SignUpForm5: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[6]); // Default to Brooklyn
  const [primaryColor, setPrimaryColor] = useState(selectedTheme.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(
    selectedTheme.secondaryColor
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleThemeSelect = (theme: (typeof themes)[0]) => {
    setSelectedTheme(theme);
    setPrimaryColor(theme.primaryColor);
    setSecondaryColor(theme.secondaryColor);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate a form submission
    setTimeout(() => {
      setIsSubmitting(false);
      const firstname = localStorage.getItem("firstname");
      const lastname = localStorage.getItem("lastname");
      const email = localStorage.getItem("email"); // Note: This key appears twice, so ensure this is correct
      const password = localStorage.getItem("password"); // Be cautious with storing sensitive data like passwords
      const industry = localStorage.getItem("industry");
      const businessName = localStorage.getItem("businessName");
      const software = localStorage.getItem("software");
      const employees = localStorage.getItem("employees");
      const countryid = localStorage.getItem("countryid");
      const stateid = localStorage.getItem("stateid");
      const StreetAddress = localStorage.getItem("StreetAddress");
      const Appartment = localStorage.getItem("Appartment");
      const City = localStorage.getItem("City");
      const ZipCode = localStorage.getItem("ZipCode");
      const phoneNumber = localStorage.getItem("phoneNumber");
      const orgwebsite = localStorage.getItem("orgwebsite");
      const organizationName = localStorage.getItem("OrganizationName");
      const bookingDomain = localStorage.getItem("bookingDomain");
      const monthlyPlans = localStorage.getItem("monthlyPlans");
      const promoCode = localStorage.getItem("promoCode");
      const cardNumber = localStorage.getItem("cardNumber");
      const cardExpiry = localStorage.getItem("cardExpiry");
      const cardCVC = localStorage.getItem("cardCVC");
      const cardName = localStorage.getItem("cardName");
      console.log("Retrieved data from localStorage:");
      console.log("First Name:", firstname);
      console.log("Last Name:", lastname);
      console.log("Email:", email);
      console.log("Password:", password); // Be cautious with sensitive data

      console.log("Industry:", industry);
      console.log("Software:", software);
      console.log("Employees:", employees);

      console.log("Country ID:", countryid);
      console.log("State ID:", stateid);
      console.log("Street Address:", StreetAddress);
      console.log("Appartment/Suite/etc:", Appartment);
      console.log("City:", City);
      console.log("Zip Code:", ZipCode);
      console.log("Phone Number:", phoneNumber);
      console.log("Organization Website:", orgwebsite);
      console.log("Business Name:", businessName);
      console.log("Organization Name:", organizationName);
      console.log("Booking Domain:", bookingDomain);
      console.log("Monthly Plans:", monthlyPlans);
      console.log("Promo Code:", promoCode);
      console.log("Card Number:", cardNumber);
      console.log("Card Expiry:", cardExpiry);
      console.log("Card CVC:", cardCVC);
      console.log("Cardholder Name:", cardName);
      console.log("Form submitted with details:", {
        theme: selectedTheme.name,
        primaryColor,
        secondaryColor,
        imageUrl: selectedTheme.imageUrl,
      });
      localStorage.removeItem("firstname");
      localStorage.removeItem("lastname");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("industry");
      localStorage.removeItem("software");
      localStorage.removeItem("employees");
      localStorage.removeItem("countryid");
      localStorage.removeItem("stateid");
      localStorage.removeItem("StreetAddress");
      localStorage.removeItem("Appartment");
      localStorage.removeItem("City");
      localStorage.removeItem("ZipCode");
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("orgwebsite");
      localStorage.removeItem("OrganizationName");
      localStorage.removeItem("bookingDomain");
      localStorage.removeItem("monthlyPlans");
      localStorage.removeItem("promoCode");
      localStorage.removeItem("cardNumber");
      localStorage.removeItem("cardExpiry");
      localStorage.removeItem("cardCVC");
      localStorage.removeItem("cardName");
      localStorage.removeItem("businessName");
      navigate("/Dashboard"); // Update this route to your actual dashboard route
    }, 1000); // Simulate a network delay
  };

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        maxWidth: "auto",
        margin: "auto",
        marginTop: { xs: 2, sm: 4 },
        position: "relative",
      }}>
      <IconButton
        onClick={() => navigate("/sign-up-4")}
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          color: "text.primary",
          zIndex: 1,
        }}>
        <ArrowBack />
      </IconButton>
      <CustomSlider currentStep={5} />
      <Typography
        variant="h5"
        textAlign="center"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "#333",
          marginBottom: { xs: 3, sm: 4 },
        }}>
        Select a theme for your business
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        mb={4}
        sx={{
          color: "black",
          maxWidth: "800px",
          marginBottom: 3,
          mx: "auto",
          lineHeight: 1.6,
        }}>
        Choose the theme that is the best fit for your brand. If you want to
        change the theme later, you can do it anytime in your admin dashboard
        once you create an account.
      </Typography>

      <Grid container spacing={4} sx={{ width: "100%", mx: "auto" }}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            {themes.map((theme) => (
              <Grid item xs={6} sm={3} key={theme.name}>
                <Paper
                  onClick={() => handleThemeSelect(theme)}
                  sx={{
                    padding: 0,
                    textAlign: "center",
                    cursor: "pointer",
                    border:
                      selectedTheme.name === theme.name
                        ? "2px solid #007BFF"
                        : "2px solid transparent",
                    transition: "all 0.3s ease-in-out",
                    boxShadow:
                      selectedTheme.name === theme.name
                        ? "0px 4px 10px rgba(0, 123, 255, 0.2)"
                        : "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                    "&:hover": {
                      boxShadow: "0px 4px 10px rgba(0, 123, 255, 0.2)",
                      borderColor: "#007BFF",
                    },
                  }}>
                  <img
                    src={theme.imageUrl}
                    alt={theme.name}
                    style={{
                      width: "80%",
                      maxHeight: "200px",
                      height: "auto",
                      borderRadius: "4px",
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // mx: "auto",
          }}>
          <Box
            sx={{
              textAlign: "center",
              padding: { xs: 0, sm: 0 },
              backgroundColor: "#fff",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              maxWidth: "100%",
            }}>
            <img
              src={selectedTheme.imageUrl}
              alt={selectedTheme.name}
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "450px",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box>
        <form onSubmit={handleSubmit}>
          <GenericButton
            label={isSubmitting ? "Creating..." : "Create your account"}
            variant="contained"
            onClick={() => console.log("Button clicked")}
            color="custom"
            type="submit"
            size="medium"
            sx={{
              height: "56px",
              marginTop: 4,
              backgroundColor: "primary",
              width: "89%",
              maxWidth: 400,
              mx: "auto",
              display: "block",

              textAlign: "center",
              textTransform: "none",
            }}
          />
        </form>
      </Box>
    </Box>
  );
};

export default SignUpForm5;
