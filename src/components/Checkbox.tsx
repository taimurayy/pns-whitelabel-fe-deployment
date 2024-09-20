import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { SxProps, Theme } from "@mui/material/styles";

interface CheckboxProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  sx?: SxProps<Theme>; // Allow additional styles
}

const GenericCheckbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  sx = {},
  label,
}) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label={label}
      sx={sx}
    />
  );
};

export default GenericCheckbox;
