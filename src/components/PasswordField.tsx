import React from "react";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles"; // Import these for TypeScript support

interface PasswordFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  required?: boolean;
  placeholder?: string;
  helperText?: string;
  disabled?: boolean;
  sx?: SxProps<Theme>; // Add this line for styling support
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  value,
  onChange,
  label = "Password",
  required = false,
  placeholder = "",
  helperText = "",
  sx = {}, // Default to empty object
  disabled = false,
}) => {
  return (
    <TextField
      type="password"
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

export default PasswordField;
