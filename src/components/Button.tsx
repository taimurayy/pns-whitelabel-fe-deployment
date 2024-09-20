import React from "react";
import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";

interface GenericButtonProps {
  onClick: () => void;
  label: string;
  variant?: "text" | "outlined" | "contained";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "custom"; // Adjust to allowed values
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  sx?: SxProps<Theme>; // Allow additional styles
}

const GenericButton: React.FC<GenericButtonProps> = ({
  onClick,
  label,
  variant = "contained",
  color = "primary", // Default to "primary"
  size = "medium",
  disabled = false,
  type,
  sx,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color === "custom" ? undefined : color} // Handle predefined colors
      size={size}
      disabled={disabled}
      type={type}
      sx={
        color === "custom"
          ? { backgroundColor: color, color: "#fff", ...sx }
          : sx
      } // Apply custom color if specified
    >
      {label}
    </Button>
  );
};

export default GenericButton;
