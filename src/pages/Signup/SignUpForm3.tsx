import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import GenericTextField from "../../components/TextField";
import MuiPhoneNumber from "material-ui-phone-number";
import GenericSelect from "../../components/Select";
import GenericButton from "../../components/Button";
import CustomSlider from "../../components/CustomSlider";
import EmailField from "../../components/EmailField";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material";
import { GetCountries, GetState, GetCity } from "react-country-state-city";
import signup3img from "../../assets/SignUp-3.jpg";
// Define types for country and state options
interface Country {
  id: string;
  name: string;
}

interface State {
  id: string;
  name: string;
}

interface City {
  id: string;
  name: string;
}

const SignUpForm3: React.FC = () => {
  const [StreetAddress, setStreetAddress] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [ZipCode, setZipcode] = useState<string>("");

  const [Appartment, setAppartment] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [orgwebsite, setorgwebsite] = useState<string>("");

  const [countryid, setCountryid] = useState<string>("");
  const [stateid, setStateid] = useState<string>("");
  const [Cityid, setCityid] = useState<string>("");
  const [countriesList, setCountriesList] = useState<Country[]>([]);
  const [stateList, setStateList] = useState<State[]>([]);
  const [cityList, setCityList] = useState<City[]>([]);

  const navigate = useNavigate();
  const [errors, setErrors] = useState<{
    selectedCountry?: string;
    selectedCity?: string;
    ZipCode?: string;
    orgwebsite?: string;
    phoneNumber?: string;
    StreetAddress?: string;
    City?: string;
    selectedState?: string;
    email?: string;
    password?: string;
  }>({});

  useEffect(() => {
    GetCountries().then((result: Country[]) => {
      setCountriesList(result);
    });
  }, []);

  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    const selectedCountryId = event.target.value;
    setCountryid(selectedCountryId);
    validateCountry();

    // Fetch states based on selected country
    GetState(selectedCountryId).then((result: State[]) => {
      setStateList(result);
      validateState();
    });

    // Clear state validation error when country changes
    setErrors((prevErrors) => ({ ...prevErrors, selectedState: "" }));
  };

  const handleStateChange = (event: SelectChangeEvent<string>) => {
    const selectedStateId = event.target.value;
    setStateid(selectedStateId);

    // Fetch cities based on selected state
    // Replace this with your actual method to get cities
    GetCity(countryid, selectedStateId).then((result: City[]) => {
      setCityList(result);
      validateCity();
    });

    // Clear state validation error when state changes
    setErrors((prevErrors) => ({ ...prevErrors, selectedCity: "" }));
  };

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    const selectedCityId = event.target.value;
    setCityid(selectedCityId);
    setErrors((prevErrors) => ({ ...prevErrors, selectedcity: "" }));
  };
  const validateStreetAddress = (value: string) => {
    if (!value) return "Street Address is required";
    return "";
  };

  const validateZipCode = (value: string) => {
    if (!value) return "Zipcode is required";
    if (!/^\d+$/.test(value)) return "Invalid Zipcode";
    return "";
  };

  const validatePhoneNumber = (value: string) => {
    // Check if the value is empty
    if (!value) return "Phone number is required";

    // Remove any non-digit characters from the input
    const digitsOnly = value.replace(/\D/g, "");

    // Check if the cleaned phone number has the correct length (e.g., 10 digits)
    const phoneNumberLength = 11; // Change this to the expected length if different

    if (digitsOnly.length !== phoneNumberLength) {
      return `Phone number must be exactly ${phoneNumberLength} digits`;
    }

    // Optional: Check if the cleaned phone number contains only digits
    if (!/^\d+$/.test(digitsOnly)) {
      return "Phone number must contain only digits";
    }

    return "";
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) return "Email is required";
    if (!emailRegex.test(value)) return "Invalid email format";
    return "";
  };

  const validateOrgWebsite = (value: string) => {
    // Check if the value is empty
    if (!value) return "Organization Website is required";

    // URL validation regex
    const urlPattern =
      /^(https?:\/\/)?([\w\d\-_]+\.)+[\w\d\-_]{2,}(\/[\w\d\-_]+)*\/?$/i;

    // Test if the value matches the URL pattern
    if (!urlPattern.test(value)) {
      return "Invalid URL format";
    }

    return "";
  };

  const validateCountry = () => {
    if (!countryid) return "Country is required";
    return "";
  };

  const validateState = () => {
    if (!stateid) return "State is required";
    return "";
  };
  const validateCity = () => {
    if (!Cityid) return "City is required";
    return "";
  };
  const handleChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      field: string,
      validate: (value: string) => string
    ) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = e.target;
      setter(value);
      setErrors((prevErrors) => ({ ...prevErrors, [field]: validate(value) }));
    };

  const handlePhoneNumberChange = (value: unknown) => {
    if (typeof value === "string") {
      setPhoneNumber(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: validatePhoneNumber(value),
      }));
    } else {
      console.error("Expected string, but received:", value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: { [key: string]: string } = {};
    newErrors.selectedCountry = validateCountry();
    newErrors.selectedState = validateState();
    newErrors.StreetAddress = validateStreetAddress(StreetAddress);

    newErrors.ZipCode = validateZipCode(ZipCode);
    newErrors.phoneNumber = validatePhoneNumber(phoneNumber);
    newErrors.email = validateEmail(email);
    newErrors.orgwebsite = validateOrgWebsite(orgwebsite);
    newErrors.selectedCity = validateCity();

    if (Object.keys(newErrors).some((key) => newErrors[key])) {
      setErrors(newErrors);
    } else {
      // Submit form data
      console.log("Form Data:");
      console.log("Country:", countryid);
      console.log("State:", stateid);
      console.log("Street Address:", StreetAddress);
      console.log("Appartment/Suite/etc:", Appartment);
      console.log("City:", Cityid);
      console.log("Zip Code:", ZipCode);
      console.log("Phone Number:", phoneNumber);
      console.log("Email:", email);
      console.log("Organization Website:", orgwebsite);
      localStorage.setItem("countryid", countryid);
      localStorage.setItem("stateid", stateid);
      localStorage.setItem("StreetAddress", StreetAddress);
      localStorage.setItem("Appartment", Appartment);
      localStorage.setItem("City", Cityid);
      localStorage.setItem("ZipCode", ZipCode);
      localStorage.setItem("phoneNumber", phoneNumber);
      localStorage.setItem("email", email);
      localStorage.setItem("orgwebsite", orgwebsite);
      navigate("/payment");
    }
  };

  return (
    <Box sx={{ display: "flex", height: "130vh", margin: "-8px" }}>
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${signup3img})`,
          backgroundSize: "cover", // Optional: to cover the entire Box
          backgroundPosition: "center", // Optional: center the image
          backgroundRepeat: "no-repeat",
          "@media (max-width: 1066px)": {
            display: "none",
          },
        }}
      />
      <Box
        sx={{
          flex: 1,
          padding: 0,
          backgroundColor: "#FAF9F6",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <IconButton
          onClick={() => navigate("/Sign-up-2")}
          sx={{
            position: "absolute",
            top: 16,
            left: 16,
            color: "text.primary",
            zIndex: 1,
          }}>
          <ArrowBack />
        </IconButton>
        <CustomSlider currentStep={3} />
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            marginTop: 2,
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "1.7rem",
            },
            textAlign: "center",
          }}>
          Add Your Organization Address
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
          <form onSubmit={handleSubmit}>
            <GenericSelect
              value={countryid}
              onChange={handleCountryChange}
              options={countriesList.map((country) => ({
                label: country.name,
                value: country.id,
              }))}
              label="Select Country"
              helperText={errors.selectedCountry}
              sx={{ marginBottom: 2 }}
            />
            <GenericTextField
              value={StreetAddress}
              onChange={handleChange(
                setStreetAddress,
                "StreetAddress",
                validateStreetAddress
              )}
              label="Street Address"
              helperText={errors.StreetAddress}
              sx={{ marginBottom: 2 }}
            />
            <GenericTextField
              value={Appartment}
              onChange={handleChange(setAppartment, "Appartment", () => "")}
              label="Appartment, Suite, etc"
              helperText="Optional"
              sx={{
                marginBottom: 1,
                "& .MuiFormHelperText-root": {
                  color: "grey", // Set the helper text color to grey
                },
              }}
            />

            <GenericSelect
              value={stateid}
              onChange={handleStateChange}
              options={stateList.map((state) => ({
                label: state.name,
                value: state.id,
              }))}
              label="Select State"
              helperText={errors.selectedState}
              disabled={!countryid}
              sx={{
                marginBottom: 2,
                "& .MuiFormHelperText-root": {
                  color: "red", // Set the helper text color to red
                },
              }}
            />
            <Box sx={{ display: "flex", gap: 2, marginBottom: 0 }}>
              <GenericSelect
                value={Cityid}
                onChange={handleCityChange}
                options={cityList.map((city) => ({
                  label: city.name,
                  value: city.id,
                }))}
                label="Select City"
                helperText={errors.selectedCity}
                disabled={!stateid}
                sx={{
                  marginBottom: 2,
                  "& .MuiFormHelperText-root": {
                    color: "red", // Set the helper text color to red
                  },
                }}
              />
              <GenericTextField
                value={ZipCode}
                onChange={handleChange(setZipcode, "ZipCode", validateZipCode)}
                label="Zip Code"
                helperText={errors.ZipCode}
                sx={{ marginBottom: 2 }}
              />
            </Box>
            <EmailField
              value={email}
              onChange={handleChange(setEmail, "email", validateEmail)}
              label="Support Email"
              helperText={errors.email}
              sx={{ marginBottom: 2 }}
            />
            <MuiPhoneNumber
              defaultCountry={"us"}
              value={phoneNumber}
              helperText={errors.phoneNumber}
              label="Phone Number"
              onChange={handlePhoneNumberChange}
              fullWidth
              margin="normal"
              required
              variant="outlined"
              FormHelperTextProps={{
                sx: { color: "red" }, // This changes the color of the helper text to red
              }}
              sx={{ marginBottom: 3 }}
            />
            <GenericTextField
              value={orgwebsite}
              onChange={handleChange(
                setorgwebsite,
                "orgwebsite",
                validateOrgWebsite
              )}
              label="Organization Website"
              helperText={errors.orgwebsite}
              sx={{ marginBottom: 2 }}
            />
            <GenericButton
              onClick={() => console.log("Button clicked")}
              label="Continue"
              variant="contained"
              color="custom"
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
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpForm3;
