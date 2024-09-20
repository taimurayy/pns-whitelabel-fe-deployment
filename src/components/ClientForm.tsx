import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import GenericTextField from "./TextField";
import GenericSelect from "./Select";
import EmailField from "./EmailField";
import GenericButton from "./Button";
import { SelectChangeEvent } from "@mui/material";

interface ClientFormProps {
  onBack: () => void; // Add the onBack prop to handle going back
}

const ClientForm: React.FC<ClientFormProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    businessName: "",
    bookingDomain: "",
    industry: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    businessName: "",
    bookingDomain: "",
    industry: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const industries = [
    { value: "tech", label: "Technology" },
    { value: "finance", label: "Finance" },
    { value: "health", label: "Healthcare" },
    { value: "retail", label: "Retail" },
  ];

  // Handle Business Name Change
  const handleBusinessNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, businessName: value }));
    validateBusinessName(value);
  };

  // Validate Business Name
  const validateBusinessName = (value: string) => {
    if (!value) {
      setFormErrors((prev) => ({
        ...prev,
        businessName: "Business Name is required",
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, businessName: "" }));
    }
  };

  // Handle Booking Domain Change
  const handleBookingDomainChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, bookingDomain: value }));
    validateBookingDomain(value);
  };

  // Validate Booking Domain
  const validateBookingDomain = (value: string) => {
    if (!value) {
      setFormErrors((prev) => ({
        ...prev,
        bookingDomain: "Booking Domain is required",
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, bookingDomain: "" }));
    }
  };

  // Handle First Name Change
  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, firstName: value }));
    validateFirstName(value);
  };

  // Validate First Name
  const validateFirstName = (value: string) => {
    if (!value) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "First Name is required",
      }));
    } else {
      setFormErrors((prev) => ({ ...prev, firstName: "" }));
    }
  };

  // Handle Last Name Change
  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, lastName: value }));
    validateLastName(value);
  };

  // Validate Last Name
  const validateLastName = (value: string) => {
    if (!value) {
      setFormErrors((prev) => ({ ...prev, lastName: "Last Name is required" }));
    } else {
      setFormErrors((prev) => ({ ...prev, lastName: "" }));
    }
  };

  // Handle Email Change
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, email: value }));
    validateEmail(value);
  };

  // Validate Email
  const validateEmail = (value: string) => {
    if (!value) {
      setFormErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setFormErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    } else {
      setFormErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  // Handle Industry Select Change
  const handleIndustryChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setFormData((prevData) => ({ ...prevData, industry: value }));
    validateIndustry(value);
  };

  // Validate Industry
  const validateIndustry = (value: string) => {
    if (!value) {
      setFormErrors((prev) => ({ ...prev, industry: "Industry is required" }));
    } else {
      setFormErrors((prev) => ({ ...prev, industry: "" }));
    }
  };

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Trigger validation for all fields
    validateBusinessName(formData.businessName);
    validateBookingDomain(formData.bookingDomain);
    validateFirstName(formData.firstName);
    validateLastName(formData.lastName);
    validateEmail(formData.email);
    validateIndustry(formData.industry);

    // Check if there are any errors
    const hasErrors = Object.values(formErrors).some((error) => error !== "");
    if (!hasErrors) {
      console.log("Form submitted:", formData);
      // Submit form data
    }
  };

  return (
    <Box sx={{ padding: 0 }}>
      <Typography
        sx={{ fontSize: "0.8rem", fontWeight: "normal", color: "grey" }}
        gutterBottom>
        BUSINESS INFO
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <GenericTextField
            value={formData.businessName}
            onChange={handleBusinessNameChange}
            label="Client Business Name"
            helperText={formErrors.businessName}
            sx={{ mb: 2 }}
          />
          <GenericTextField
            value={formData.bookingDomain}
            onChange={handleBookingDomainChange}
            label="Client Booking Domain"
            helperText={formErrors.bookingDomain}
            sx={{ mb: 2 }}
          />
        </Box>
        <GenericSelect
          value={formData.industry}
          onChange={handleIndustryChange}
          options={industries}
          label="Select Industry"
          helperText={formErrors.industry}
          sx={{ mb: 2 }}
        />
        <Divider sx={{ my: 2 }} />
        <Typography
          sx={{ fontSize: "0.8rem", fontWeight: "normal", color: "grey" }}
          gutterBottom>
          ADMIN USER INFO
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <GenericTextField
            value={formData.firstName}
            onChange={handleFirstNameChange}
            label="First Name"
            helperText={formErrors.firstName}
            sx={{ mb: 2 }}
          />
          <GenericTextField
            value={formData.lastName}
            onChange={handleLastNameChange}
            label="Last Name"
            helperText={formErrors.lastName}
            sx={{ mb: 2 }}
          />
        </Box>
        <EmailField
          value={formData.email}
          onChange={handleEmailChange}
          label="Email Address"
          helperText={formErrors.email}
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
          <GenericButton
            label="Back"
            onClick={onBack}
            variant="contained"
            color="custom"
            size="medium"
            sx={{
              width: "100%",
              maxWidth: 120,
              display: "block",
              height: "56px",
              textTransform: "none",
            }}
          />
          <GenericButton
            label="Submit"
            onClick={() => console.log("Form submitted")}
            variant="contained"
            color="custom"
            type="submit"
            size="medium"
            sx={{
              height: "56px",
              width: "100%",
              maxWidth: 120,
              display: "block",
              textTransform: "none",
            }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default ClientForm;
