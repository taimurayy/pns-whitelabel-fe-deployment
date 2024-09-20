import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void; // Ensure the type is SelectChangeEvent<string>
  options: SelectOption[];
  label?: string;
  helperText?: string;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

const GenericSelect: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  label,
  helperText,
  disabled,
  sx,
}) => {
  return (
    <FormControl fullWidth sx={sx} disabled={disabled}>
      {label && <InputLabel>{label}</InputLabel>}
      <Select
        value={value}
        onChange={onChange}
        label={label} // MUI's Select automatically shows label within the dropdown when present
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <FormHelperText sx={{ color: "red" }}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};

export default GenericSelect;
