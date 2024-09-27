import React from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import DemoIcon from "@mui/icons-material/AccountCircle"; // Replace with appropriate icon
import LiveIcon from "@mui/icons-material/LiveTv";
import { useState } from "react";
import ClientForm from "./ClientForm";
import { useNavigate } from "react-router-dom";
interface CardFeildProps {
  username: string; // Define the prop type
}
const CardFeild: React.FC<CardFeildProps> = ({ username }) => {
  const [openmodal, setOpenmodal] = React.useState(false);
  const handleOpenmodal = () => setOpenmodal(true);
  const handleClosemodal = () => setOpenmodal(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleCardClick = (cardType: string) => {
    setSelectedCard(cardType);
  };
  const handleBackClick = () => {
    setSelectedCard(null);
  };
  const handleclient = () => {
    navigate("/client");
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 600,
    bgcolor: "background.paper",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    p: 4,
  };
  // Replace this with dynamic user data if needed
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        // Responsive layout for small screens
        justifyContent: "space-between",
        alignItems: { md: "left" },
        marginTop: { xl: -5, lg: -7 },
      }}>
      <Box sx={{ marginTop: -3, mt: { md: 6 }, mb: { xs: 2, sm: 0 } }}>
        {" "}
        {/* Margin-bottom for small screens */}
        {/* Top Greeting Section */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ marginTop: { xs: 3, sm: 3 } }}>
          Hi, {username}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Welcome to the dashboard.
        </Typography>
        <Box display="flex">
          <Button
            variant="contained"
            onClick={handleOpenmodal}
            color="primary"
            sx={{
              mr: 2,
              maxWidth: "100%",
              width: {
                xs: "50%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
            }}>
            + Create Client
          </Button>
          <Button
            variant="contained"
            onClick={handleclient}
            color="primary"
            sx={{
              maxWidth: "100%",
              width: {
                xs: "50%",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
              },
            }}>
            View Client Dashboard
          </Button>
        </Box>
        <Modal
          keepMounted
          open={openmodal}
          onClose={handleClosemodal}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description">
          <Box
            sx={{
              ...style,
              width: { xs: "70%", sm: "60%" },
            }}>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClosemodal}
              aria-label="close"
              sx={{
                position: "absolute",
                top: 8,
                right: 20,
                color: "text.secondary",
              }}>
              <CloseIcon />
            </IconButton>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2">
              {selectedCard
                ? `Create ${selectedCard === "demo" ? "Demo" : "Live"} Client`
                : "Select Client Type"}
            </Typography>
            {selectedCard === null ? (
              <>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  Choose whether you want to create a demo client or a live
                  client, each designed to serve a specific purpose.
                </Typography>
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    gap: 2,
                    marginBottom: 2,
                  }}>
                  <Card
                    sx={{
                      border:
                        selectedCard === "demo"
                          ? "2px solid blue"
                          : "1px solid grey",
                      borderRadius: 2,
                      cursor: "pointer",
                      width: { xs: "100%", sm: 300 },
                    }}
                    onClick={() => handleCardClick("demo")}>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}>
                          <DemoIcon color="action" sx={{ color: "blue" }} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: "500" }}>
                              Create Demo Client
                            </Typography>
                            <Typography variant="body2" sx={{ color: "grey" }}>
                              Free (1/5)
                            </Typography>
                          </Box>
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "black" }}>
                          A demo client is designed for trying out, testing, and
                          showcasing demos to your clients. It includes a banner
                          (demo watermark) on the client's dashboard.
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card
                    sx={{
                      border:
                        selectedCard === "live"
                          ? "2px solid blue"
                          : "1px solid grey",
                      borderRadius: 2,
                      cursor: "pointer",
                      width: { xs: "100%", sm: 300 },
                    }}
                    onClick={() => handleCardClick("live")}>
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                          }}>
                          <LiveIcon color="action" sx={{ color: "blue" }} />
                          <Box>
                            <Typography variant="h6" sx={{ fontWeight: "500" }}>
                              Create Live Client
                            </Typography>
                            <Typography variant="body2" sx={{ color: "grey" }}>
                              License price: starting from{" "}
                              <Box
                                component="span"
                                sx={{ fontWeight: "bold", color: "black" }}>
                                $24.00
                              </Box>
                            </Typography>
                          </Box>
                        </Box>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ color: "black" }}>
                          A live production account requires one license, which
                          will be added to your subscription.
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              </>
            ) : (
              <>
                <ClientForm onBack={handleBackClick} />
              </>
            )}

            <CardActions sx={{ justifyContent: "flex-end" }}>
              {selectedCard ? <></> : <></>}
            </CardActions>
          </Box>
        </Modal>
      </Box>

      {/* SMS Credits and Licenses Section */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: { xs: "column", sm: "row" },
        }}>
        {/* SMS Credits Card */}
        <Card
          sx={{
            boxShadow: 3,
            p: 2,
            mt: { md: 10 },
            borderRadius: 2,
            maxWidth: "200px",
            width: { xs: "100%" }, // Full-width on small screens
          }}>
          <Typography variant="h6" sx={{ fontSize: "0.8rem", fontWeight: 500 }}>
            SMS Credits
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "0.8rem", color: "grey", mt: 1 }}>
            You have{" "}
            <Box
              component="span"
              sx={{ fontSize: "0.8rem", fontWeight: "bold", color: "black" }}>
              120
            </Box>{" "}
            credits left.
          </Typography>
        </Card>

        {/* Licenses Card */}
        <Card
          sx={{
            boxShadow: 3,
            p: 2,
            mt: { md: 10 },
            borderRadius: 2,
            maxWidth: "200px",
            width: { xs: "100%" }, // Full-width on small screens
          }}>
          <Typography variant="h6" sx={{ fontSize: "0.8rem", fontWeight: 500 }}>
            Licenses
          </Typography>
          <Typography variant="body2" sx={{ color: "grey", mt: 1 }}>
            Demo:{" "}
            <Box
              component="span"
              sx={{ fontSize: "0.8rem", fontWeight: "bold", color: "black" }}>
              1/5
            </Box>{" "}
            <br />
            Live:{" "}
            <Box
              component="span"
              sx={{ fontSize: "0.8rem", fontWeight: "bold", color: "black" }}>
              0
            </Box>{" "}
            Active Licenses
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default CardFeild;
