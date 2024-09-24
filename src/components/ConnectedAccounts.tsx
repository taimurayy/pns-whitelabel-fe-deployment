import { useState } from "react";
import {
  Typography,
  Box,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Radio,
  RadioGroup,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Google as GoogleIcon } from "@mui/icons-material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import MicrosoftIcon from "@mui/icons-material/Work";
import ZoomIcon from "@mui/icons-material/VideoCall";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface Account {
  value: string;
  email: string;
}

const ConnectedAccounts = () => {
  const [selected, setSelected] = useState<"connected" | "authorized">(
    "connected"
  );
  const [openModal, setOpenModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<string>("");
  const [connectedAccounts, setConnectedAccounts] = useState<Account[]>([
    { value: "google", email: "email@example.com" }, // Default account
  ]);

  const handleSelect = (option: "connected" | "authorized") => {
    setSelected(option);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddAccount = () => {
    if (selectedAccount) {
      setConnectedAccounts((prev) => [
        ...prev,
        { value: selectedAccount, email: "email@example.com" }, // Replace with actual email input if needed
      ]);
      handleCloseModal();
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box display="flex" sx={{ mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mr: 2,
            borderBottom: selected === "connected" ? "2px solid black" : "none",
            paddingBottom: "8px",
            cursor: "pointer",
          }}
          onClick={() => handleSelect("connected")}>
          Connected Accounts
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom:
              selected === "authorized" ? "2px solid black" : "none",
            paddingBottom: "8px",
            cursor: "pointer",
          }}
          onClick={() => handleSelect("authorized")}>
          Authorized Accounts
        </Typography>
      </Box>
      <Divider sx={{ mb: -2, ml: -10 }} />
      <Box sx={{ mt: 3 }} display="flex">
        <Typography sx={{ fontSize: "1rem" }}>
          Connect other tools and get out of more.
        </Typography>
        <IconButton
          color="primary"
          sx={{ ml: "auto", mr: 14 }}
          onClick={handleOpenModal}>
          <AddCircleRoundedIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          mt: 2,
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          width: "1000px",
        }}>
        {selected === "connected" &&
          connectedAccounts.map((account, index) => (
            <Box key={index} sx={{ marginTop: "16px", marginBottom: "16px" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {account.value === "google" && (
                  <GoogleIcon sx={{ fontSize: "40px" }} />
                )}
                {account.value === "microsoft" && (
                  <MicrosoftIcon sx={{ fontSize: "40px" }} />
                )}
                {account.value === "zoom" && (
                  <ZoomIcon sx={{ fontSize: "40px" }} />
                )}
                {account.value === "calendly" && (
                  <CalendarTodayIcon sx={{ fontSize: "40px" }} />
                )}
                {account.value === "custom" && (
                  <EmailIcon sx={{ fontSize: "40px" }} />
                )}
                <Box>
                  <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                    {account.value.charAt(0).toUpperCase() +
                      account.value.slice(1)}
                  </Typography>
                  <Typography variant="body2" sx={{ marginLeft: "8px" }}>
                    {account.email}
                  </Typography>
                </Box>
              </Box>
              {index < connectedAccounts.length - 1 && (
                <Divider sx={{ marginY: "8px" }} />
              )}
            </Box>
          ))}
      </Box>

      {/* Modal for Adding Accounts */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        scroll="paper"
        fullWidth
        sx={{ overflow: "hidden", maxWidth: "100%" }}>
        <DialogTitle sx={{ fontWeight: 600 }}>Connect an Account</DialogTitle>
        <DialogContent>
          <Box>
            <RadioGroup
              value={selectedAccount}
              onChange={(e) => setSelectedAccount(e.target.value)}
              sx={{ display: "flex", flexDirection: "column" }}>
              {[
                {
                  value: "google",
                  label: "Google",
                  icon: <GoogleIcon sx={{ marginRight: "8px" }} />,
                },
                {
                  value: "microsoft",
                  label: "Microsoft",
                  icon: <MicrosoftIcon sx={{ marginRight: "8px" }} />,
                },
                {
                  value: "zoom",
                  label: "Zoom",
                  icon: <ZoomIcon sx={{ marginRight: "8px" }} />,
                },
                {
                  value: "calendly",
                  label: "Calendly",
                  icon: <CalendarTodayIcon sx={{ marginRight: "8px" }} />,
                },
                {
                  value: "custom",
                  label: "Custom Email",
                  icon: <EmailIcon sx={{ marginRight: "8px" }} />,
                },
              ].map(({ value, label, icon }) => (
                <Box key={value}>
                  <Box display="flex" alignItems="center" sx={{ mb: 1 }}>
                    {icon}
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                      }}>
                      <Typography>{label}</Typography>
                    </Box>
                    <Radio
                      value={value}
                      checked={selectedAccount === value}
                      onChange={() => setSelectedAccount(value)}
                    />
                  </Box>
                  <Divider sx={{ ml: -4, width: "110%" }} />
                </Box>
              ))}
            </RadioGroup>
          </Box>
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#f9f9f9" }}>
          <Button onClick={handleCloseModal} color="primary">
            Cancel
          </Button>
          <Button
            sx={{ backgroundColor: "white", borderRadius: 2, color: "black" }}
            onClick={handleAddAccount}
            disabled={!selectedAccount}>
            {selectedAccount === "google" && (
              <GoogleIcon sx={{ marginRight: "8px" }} />
            )}
            {selectedAccount === "microsoft" && (
              <MicrosoftIcon sx={{ marginRight: "8px" }} />
            )}
            {selectedAccount === "zoom" && (
              <ZoomIcon sx={{ marginRight: "8px" }} />
            )}
            {selectedAccount === "calendly" && (
              <CalendarTodayIcon sx={{ marginRight: "8px" }} />
            )}
            {selectedAccount === "custom" && (
              <EmailIcon sx={{ marginRight: "8px" }} />
            )}
            Connect with{" "}
            {selectedAccount.charAt(0).toUpperCase() + selectedAccount.slice(1)}{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ConnectedAccounts;
