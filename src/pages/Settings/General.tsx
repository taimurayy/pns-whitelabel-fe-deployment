import { useState } from "react";
import Layout from "../../components/Layout";
import PermanentDrawerLeft from "../../components/SettingsSidebar";
import { Box } from "@mui/material";
import GenericTextField from "../../components/TextField";
import GenericButton from "../../components/Button";

export default function General() {
  const [general, setGeneral] = useState("HRDLS");
  const [currency, setCurrency] = useState("");
  const [errors, setErrors] = useState({ general: "", currency: "" });

  const handleGeneralChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGeneral(event.target.value);

    // Example validation: Checking if the input is empty
    if (event.target.value === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: "Organization name is required.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: "",
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    // Basic validation: Check if fields are filled
    let valid = true;
    if (general.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        general: "Organization name is required.",
      }));
      valid = false;
    }

    if (currency === "" || Number(currency) <= 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        currency: "Currency amount must be greater than zero.",
      }));
      valid = false;
    }

    if (valid) {
      // Proceed with form submission (e.g., send data to an API)
      const formData = {
        general,
        currency,
      };
      console.log("Form Submitted Successfully!", formData);
      alert("DATA HAS BEEN SAVED SUCCESSFULLY");
      // You can replace the above line with an API call or any further processing
    } else {
      console.log("Form has errors.");
    }
  };

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Ensure only numbers are entered in the currency field
    if (!/^\d*\.?\d*$/.test(value)) return;

    setCurrency(value);

    // Example validation: Currency cannot be empty or zero
    if (value === "" || Number(value) === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        currency: "Currency amount is required.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        currency: "",
      }));
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: -3,
        }}>
        <PermanentDrawerLeft />
        <Box sx={{ marginLeft: 35, mt: 8 }}>
          <form onSubmit={handleSubmit}>
            {/* Organization Name Field */}
            <Box display="flex">
              <GenericTextField
                value={general}
                onChange={handleGeneralChange}
                label="Organization Name"
                helperText={errors.general}
                type="text"
                sx={{
                  marginBottom: 2,
                  width: {
                    lg: "20%",
                    xl: "20%",
                    md: "40%",
                    sm: "60%",
                  },
                }}
              />
            </Box>
            {/* Currency Field */}
            <Box display="flex">
              <GenericTextField
                value={currency}
                onChange={handleCurrencyChange}
                label="Currency"
                helperText={errors.currency}
                type="number"
                sx={{
                  marginBottom: 2,
                  width: {
                    lg: "20%",
                    xl: "20%",
                    md: "40%",
                    sm: "60%",
                  },
                }}
                startAdornment="USD - US DOLLAR ($)"
              />
            </Box>
            <Box display="flex">
              <GenericButton
                onClick={() => console.log("Button clicked")}
                label="Save"
                variant="contained"
                color="custom" // For custom color
                type="submit"
                size="medium"
                sx={{
                  height: "45px",
                  backgroundColor: "primary",
                  width: "8%",
                }}
              />
            </Box>
          </form>
        </Box>
      </Box>
    </Layout>
  );
}
