import { useState } from "react";
import { IconButton, Snackbar, Alert } from "@mui/material";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import CheckIcon from "@mui/icons-material/Check";

const CopyButton = ({ text }: { text: string }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        setMessage("Copied to clipboard");
        setOpen(true);
      },
      (err) => {
        setMessage(`Failed to copy: ${err}`);
        setOpen(true);
      }
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleCopy} sx={{ ml: 1 }}>
        <CopyAllIcon />
      </IconButton>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            alignItems: "center",
            justifyContent: "center",
          },
        }}>
        <Alert
          onClose={handleClose}
          severity={message.startsWith("Failed") ? "error" : "success"}
          icon={<CheckIcon fontSize="inherit" />}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CopyButton;
