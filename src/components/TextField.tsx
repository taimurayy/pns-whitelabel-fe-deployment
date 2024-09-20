import React from "react";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/material/styles"; // Import these for TypeScript support
import InputAdornment from "@mui/material/InputAdornment"; // Import InputAdornment for adding icons or text

interface TextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  helperText?: string;
  disabled?: boolean;
  sx?: SxProps<Theme>; // Add this line for styling support
  startAdornment?: React.ReactNode; // Optional adornment for the start side
  endAdornment?: React.ReactNode; // Optional adornment for the end side
}

const GenericTextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  required = false,
  helperText = "",
  type = "text",
  disabled = false,
  sx = {}, // Default to empty object
  startAdornment,
  endAdornment,
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      label={label}
      placeholder={placeholder}
      required={required}
      helperText={helperText}
      type={type}
      fullWidth
      sx={sx} // Apply custom styles
      disabled={disabled}
      FormHelperTextProps={{
        sx: { color: "red" }, // Change helper text color to red
      }} // Show error state if there's helperText
      InputProps={{
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : null,
        endAdornment: endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : null,
      }}
    />
  );
};

export default GenericTextField;
