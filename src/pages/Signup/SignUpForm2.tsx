import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";

import GenericSelect from "../../components/Select";
import { ArrowBack } from "@mui/icons-material";
import CustomSlider from "../../components/CustomSlider"; // Reuse your CustomSlider component
import GenericButton from "../../components/Button"; // Reuse your GenericButton component
import GenericTextField from "../../components/TextField";
import { SelectChangeEvent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import signup2img from "../../assets/SignUp-2.jpg";
const SignUpForm2: React.FC = () => {
  const [OrganizationName, setOrganizationName] = useState("");

  const navigate = useNavigate();
  const [industry, setSelectedindustry] = useState<string>("");
  const [employees, setSelectedemployees] = useState<string>("");
  const [software, setSelectedsoftware] = useState<string>("");
  const validateOrganizationName = (value: string) => {
    if (!value) {
      return "Organization name is required";
    }
    return "";
  };
  const handleOrganizationNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setOrganizationName(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      OrganizationName: validateOrganizationName(value),
    }));
  };
  const handleChangeselectindustry = (
    event: SelectChangeEvent<string> // Update to SelectChangeEvent<string>
  ) => {
    setSelectedindustry(event.target.value);
  };

  const handleChangeselectemployees = (
    event: SelectChangeEvent<string> // Update to SelectChangeEvent<string>
  ) => {
    setSelectedemployees(event.target.value);
  };

  const handleChangeselectsoftware = (
    event: SelectChangeEvent<string> // Update to SelectChangeEvent<string>
  ) => {
    setSelectedsoftware(event.target.value);
  };
  const industryoptions = [
    { label: "Amusement Parks", value: "AmusementParks" },
    { label: "Archery Range", value: "ArcheryRange" },
    { label: "Axe Throwing", value: "AxeThrowing" },
    { label: "Camp & Retreats", value: "Camp&Retreats" },
    { label: "Cycling", value: "Cycling" },
    { label: "Equestrian", value: "Equestrian" },
    { label: "Escape & Selfie Rooms", value: "Escape&SelfieRooms" },
    { label: "Fishing", value: "Fishing" },
    { label: "Gym & Fitness Centers", value: "Gym&FitnessCenters" },
    { label: "Horseback Riding", value: "HorsebackRiding" },
    { label: "Hotel & Resorts", value: "Hotel&Resorts" },
    { label: "Hunting", value: "Hunting" },
    { label: "Motorsports", value: "Motorsports" },
    { label: "Non Profit", value: "NonProfit" },
    { label: "Outfits & Guides", value: "Outfits&Guides" },
    { label: "Paddle Sports", value: "PaddleSports" },
    { label: "Paragliding", value: "Paragliding" },
    { label: "Parks & Recreation", value: "Parks&Recreation" },
    { label: "Races & Events", value: "Races&Events" },
    { label: "Rentals", value: "Rentals" },
    { label: "Salon & Spas", value: "Salon&Spas" },
    { label: "Shooting Range", value: "ShootingRange" },
    { label: "Skiing", value: "Skiing" },
    { label: "Skydiving", value: "Skydiving" },
    { label: "Sports Leagues", value: "SportsLeagues" },
    { label: "Travel & Hospitality", value: "Travel&Hospitality" },
    { label: "Watersports", value: "Watersports" },
    { label: "Wellness & Safety", value: "Wellness & Safety" },
    { label: "Other", value: "other" },
  ];
  const softwareoptions = [
    { label: "None", value: "None" },
    { label: "aWaiver", value: "aWaiver" },
    { label: "Checkfront", value: "Checkfront" },
    { label: "Clever waiver", value: "Clever waiver" },
    { label: "Docusign", value: "Docusign" },
    { label: "EzWaiver", value: "EzWaiver" },
    { label: "Formstack", value: "Formstack" },
    { label: "Smart Waiver", value: "Smart Waiver" },
    { label: "WaiverSign", value: "WaiverSign" },
    { label: "Waiverelectronic", value: "Waiverelectronic" },
    { label: "WaiverFile", value: "WaiverFile" },
    { label: "Waiverforever", value: "Waiverforever" },
    { label: "WaiverKing", value: "WaiverKing" },
    { label: "Wherewolf", value: "Wherewolf" },
  ];
  const employeeoptions = [
    { value: "1-10", label: "1-10" },
    { value: "10-40", label: "10-40" },
    { value: "40-100", label: "40-100" },
    { value: "100+", label: "100+" },
  ];

  const [errors, setErrors] = useState<{
    OrganizationName?: string;
    industry?: string;
    software?: string;
    employees?: string;
  }>({});

  // Function to handle slider change

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    type Errors = { [key: string]: string };

    const newErrors: Errors = {};

    // Validation
    if (!OrganizationName) {
      newErrors.OrganizationName = "organization is required";
    }
    if (!software) {
      newErrors.software = "Software is required";
    }
    if (!industry) {
      newErrors.industry = "industry is required";
    }
    if (!employees) {
      newErrors.employees = "Employees are required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission
      console.log("Form submitted:", {
        OrganizationName,
        industry,
        software,
        employees,
      });
      localStorage.setItem("OrganizationName", OrganizationName);
      localStorage.setItem("industry", industry);
      localStorage.setItem("software", software);
      localStorage.setItem("employees", employees);
      // Reset form fields
      setOrganizationName("");
      setSelectedsoftware("");
      setSelectedindustry("");
      setSelectedemployees("");

      navigate("/sign-up-3");
    }
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", margin: "-8px" }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${signup2img})`,
          backgroundSize: "cover", // Optional: to cover the entire Box
          backgroundPosition: "center", // Optional: center the image
          backgroundRepeat: "no-repeat",
          "@media (max-width: 1066px)": { display: "none" },
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
          onClick={() => navigate("/sign-up-1")} // Navigate to the previous page
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
          <CustomSlider currentStep={2} />
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
              marginTop: 2,
            }}>
            Organization Details
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100%",
              maxWidth: 1200,
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
                  maxWidth: 400,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}>
                <form
                  onSubmit={handleSubmit}
                  style={{ width: "100%", maxWidth: 600 }}>
                  <GenericTextField
                    value={OrganizationName}
                    onChange={handleOrganizationNameChange}
                    label="Organization Name"
                    helperText={errors.OrganizationName}
                    type="text"
                    sx={{
                      marginBottom: 2,
                    }}
                  />
                  <GenericSelect
                    value={industry}
                    onChange={handleChangeselectindustry}
                    options={industryoptions}
                    label="Choose an Industry"
                    helperText={errors.industry}
                    sx={{
                      marginBottom: 2,
                      width: "100%", // Ensure the select field is responsive
                      maxWidth: 400,
                      "& .MuiInputBase-input": {
                        textAlign: "left", // Align the selected value to the left
                      },
                    }}
                  />
                  <GenericSelect
                    value={employees}
                    onChange={handleChangeselectemployees}
                    options={employeeoptions}
                    label="Number of Employees"
                    helperText={errors.employees}
                    sx={{
                      marginBottom: 2,
                      width: "100%", // Ensure the select field is responsive
                      maxWidth: 400,
                      "& .MuiInputBase-input": {
                        textAlign: "left", // Align the selected value to the left
                      },
                    }}
                  />
                  <GenericSelect
                    value={software}
                    onChange={handleChangeselectsoftware}
                    options={softwareoptions}
                    label="Switching from another software?"
                    helperText={errors.software}
                    sx={{
                      marginBottom: 2,
                      width: "100%", // Ensure the select field is responsive
                      maxWidth: 400,
                      "& .MuiInputBase-input": {
                        textAlign: "left", // Align the selected value to the left
                      },
                    }}
                  />

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
                      maxWidth: 400, // Optional: limit max width for better appearance
                      display: "block",
                      margin: "0 auto", // Center the button horizontally
                      textTransform: "none", // Prevents text from being capitalized
                    }}
                  />
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm2;
