import React from "react";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles"; // Import these for TypeScript support

interface EmailFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
  sx?: SxProps<Theme>; // Add this line for styling support
}

const EmailField: React.FC<EmailFieldProps> = ({
  value,
  onChange,
  label = "Email",
  required = false,
  placeholder = "",
  helperText = "",
  disabled = false,
  sx = {}, // Default to empty object
}) => {
  return (
    <TextField
      type="email"
      value={value}
      onChange={onChange}
      label={label}
      required={required}
      placeholder={placeholder}
      helperText={helperText}
      disabled={disabled}
      fullWidth
      sx={sx} // Apply custom styles
      FormHelperTextProps={{
        sx: { color: "red" }, // Change helper text color to red
      }}
    />
  );
};

export default EmailField;
