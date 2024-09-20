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
import { Google as GoogleIcon } from "@mui/icons-material";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const ConnectedAccounts = () => {
  const [selected, setSelected] = useState("connected");
  const [openModal, setOpenModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState("");

  const handleSelect = (option: string) => {
    setSelected(option);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAddAccount = () => {
    // Add your logic to connect the selected account here
    console.log(`Adding account: ${selectedAccount}`);
    handleCloseModal();
  };

  return (
    <Box>
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
          sx={{ ml: "auto", mr: 2 }}
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
        {selected === "connected" && (
          <Box sx={{ marginTop: "4px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GoogleIcon sx={{ color: "#DB4437", fontSize: "40px" }} />
              <Box>
                <Typography variant="body1" sx={{ marginLeft: "8px" }}>
                  Google
                </Typography>
                <Typography variant="body2" sx={{ marginLeft: "8px" }}>
                  email@example.com
                </Typography>
              </Box>
            </Box>
          </Box>
        )}
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
              sx={{ display: "flex", flexDirection: "column" }} // Column layout
            >
              {[
                {
                  value: "google",
                  label: "Google",
                  icon: (
                    <GoogleIcon sx={{ color: "#DB4437", marginRight: "8px" }} />
                  ),
                },
                // Add other icons here
                {
                  value: "microsoft",
                  label: "Microsoft",
                  icon: (
                    <GoogleIcon sx={{ color: "#DB4437", marginRight: "8px" }} />
                  ),
                  // icon: <YourMicrosoftIcon sx={{ marginRight: "8px" }} />,
                },
                {
                  value: "zoom",
                  label: "Zoom",
                  icon: (
                    <GoogleIcon sx={{ color: "#DB4437", marginRight: "8px" }} />
                  ),
                  // icon: <YourZoomIcon sx={{ marginRight: "8px" }} />,
                },
                {
                  value: "calendly",
                  label: "Calendly",
                  icon: (
                    <GoogleIcon sx={{ color: "#DB4437", marginRight: "8px" }} />
                  ),
                  // icon: <YourCalendlyIcon sx={{ marginRight: "8px" }} />,
                },
                {
                  value: "custom",
                  label: "Custom Email",
                  icon: (
                    <GoogleIcon sx={{ color: "#DB4437", marginRight: "8px" }} />
                  ),
                  // icon: <YourCustomIcon sx={{ marginRight: "8px" }} />,
                },
              ].map(({ value, label, icon }) => (
                <Box>
                  <Box
                    key={value}
                    display="flex"
                    alignItems="center"
                    sx={{ mb: 1 }}>
                    {icon} {/* Icon on the left */}
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                      }}>
                      <Typography>{label}</Typography> {/* Label */}
                    </Box>
                    <Radio
                      value={value}
                      checked={selectedAccount === value}
                      onChange={() => setSelectedAccount(value)}
                    />{" "}
                    {/* Radio button */}
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
            {selectedAccount && (
              <GoogleIcon sx={{ color: "#DB4437", marginRight: "8px" }} />
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
