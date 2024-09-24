import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import GenericTextField from "./TextField";
import MuiPhoneNumber from "material-ui-phone-number";
import { SvgIconProps } from "@mui/material/SvgIcon";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";

interface CustomCardProps {
  title: string;
  buttonLabel: string;
  Icon: React.FC<SvgIconProps>;
  headings: string[];
  description: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  buttonLabel,
  Icon,
  headings,
  description,
}) => {
  const [errors, setErrors] = useState<{
    phoneNumber?: string;
    prefixchange?: string;
  }>({});
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [prefixchange, setprefixchange] = useState("");
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
  const validateprefix = (value: string) => {
    // Check if the value is empty
    if (!value) return "";

    return "";
  };
  const handleprefixChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setprefixchange(value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      prefixchange: validateprefix(value),
    }));
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
  const handleOpen = () => {
    if (title === "Personal Numbers") {
      setOpen(true);
    } else {
      console.log("Add button is not allowed for this title.");
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    console.log("Selected Option:", selectedOption);
    console.log("Phone Number:", phoneNumber);
    handleClose();
  };

  return (
    <Box
      sx={{
        mt: 3,
        mb: 3,
        minWidth: "300px",
        maxWidth: "300px",
      }}>
      <Box display="flex">
        <Typography variant="h6" sx={{ fontWeight: 200 }}>
          {title}
        </Typography>
        <Button
          sx={{
            color: "black",
            backgroundColor: "white",
            ml: "auto",
            border: "1px solid black",
            borderRadius: 2,
          }}
          onClick={handleOpen}>
          <AddCircleOutlineRoundedIcon sx={{ color: "black", mr: 1 }} />
          {buttonLabel}
        </Button>
      </Box>
      <Box
        sx={{
          border: "1px solid #ccc",
          padding: 2,
          mt: 2,
          borderRadius: 2,
        }}>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}>
          <Icon sx={{ fontSize: "5rem" }} />
          <Box>
            {headings.map((heading, index) => (
              <Typography key={index} variant="subtitle1">
                {heading}
              </Typography>
            ))}
          </Box>
          <Typography sx={{ color: "gray" }} variant="body2">
            {description}
          </Typography>
        </Box>
      </Box>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Personal Number</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            {[
              { label: "New Number", description: "Get a new phone number." },
              {
                label: "External Number",
                description: "Transfer an external number.",
              },
              {
                label: "Porting & BYC",
                description: "Port your number and BYC options.",
              },
            ].map(({ label, description }) => (
              <Box
                key={label}
                sx={{
                  border:
                    selectedOption === label
                      ? "2px solid #6b9af4"
                      : "1px solid #ccc",
                  backgroundColor:
                    selectedOption === label ? "#eaf1ff" : "white",
                  borderRadius: 2,
                  padding: 2,

                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    borderColor: "blue",
                  },
                  flex: 1, // Make cards equal width
                }}
                onClick={() => handleOptionSelect(label)}>
                <Typography variant="body1" textAlign="center">
                  {label}
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  sx={{ color: "black", mt: 1 }}>
                  {description}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 2 }}>
            <Box display="flex">
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
                sx={{ mt: 2, ml: 1 }}
                value={prefixchange}
                onChange={handleprefixChange}
                label="Prefix (Optional)"
                helperText={errors.prefixchange}
                type="text"
              />
            </Box>
            <Typography variant="body1" sx={{ color: "gray", mt: -1 }}>
              Your organization will be billed 1.5$/month after an year.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#f9f9f9" }}>
          <Typography variant="body1" color="primary" sx={{ mr: "auto" }}>
            Learn about calling in close
          </Typography>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            sx={{
              backgroundColor: "#2b6cf0",
              color: "white",
              ":hover": {
                backgroundColor: "#2b6cf0", // Keep the background the same on hover
                color: "white", // Keep the text color the same on hover
              },
            }}
            disabled={!selectedOption}>
            Request New Number
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CustomCard;
