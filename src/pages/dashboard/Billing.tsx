import {
  Box,
  Card,
  CardContent,
  IconButton,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Layout from "../../components/Layout"; // Importing your existing Layout with the sidebar
import PricingIcon from "@mui/icons-material/AttachMoney";

const Billing = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: { xs: 4, md: 2 }, // Adjust bottom margin for smaller screens
          px: { xs: 2, md: 3 }, // Margin on smaller screens
        }}>
        <Typography
          color="black"
          sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
          Billing
        </Typography>
        <IconButton
          component="a"
          href="/pricing"
          sx={{ display: { md: "flex" } }} // Hide on smaller screens
        >
          <PricingIcon />
          <Typography ml={1}>Pricing</Typography>
        </IconButton>
      </Box>

      {/* Outer container for the main content */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          display: "flex",
          justifyContent: "center",
          width: "100%", // Ensure full width
          maxWidth: { xs: "100%", sm: "90%", md: "1200px" },
        }}>
        <Grid container spacing={3} sx={{ maxWidth: { xs: "100%" } }}>
          {/* Billing Information Card */}
          <Grid item xs={12} sx={{ marginRight: 2 }}>
            <Card
              sx={{
                width: "100%",
                marginBottom: 10,
                marginLeft: "-10px",
                maxWidth: "100%", // Makes it take up the full available space
                // Centers it horizontally with margin
                px: { xs: 1, md: 1 }, // Adds padding horizontally for small to medium screens
              }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // Stack vertically on smaller screens, row on larger

                    padding: { xs: "16px", md: "36px" }, // Padding for small to medium screens
                    gap: { xs: 2, md: 5 }, // Adjust gap for different screen sizes
                    alignItems: "flex-start", // Align items to the start
                    flexWrap: "nowrap", // Prevent wrapping

                    width: "100%", // Full width for the card
                  }}>
                  {/* Go Combine and Date */}
                  <Box
                    sx={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      mb: { xs: 2, md: 0 }, // Margin-bottom for smaller screens
                      maxWidth: "100%",
                      marginRight: 1,
                      marginLeft: { xl: "-20px", lg: "-20px", md: "-20px" },
                    }}>
                    <Typography variant="h5" component="div">
                      Go Combine
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Active since August 4, 2024
                    </Typography>
                  </Box>

                  {/* Billing Summary */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" }, // Stack vertically on smaller screens
                      gap: 2, // Gap between cards
                      flexWrap: "wrap", // Allow wrapping on small screens
                      flex: 2,
                      justifyContent: "flex-start", // Aligns the cards to the start
                      marginRight: 3,
                    }}>
                    <Card
                      sx={{
                        flex: 1,
                        maxWidth: 200,
                        minWidth: 150,
                        backgroundColor: "#F7F8F9",
                        mx: { xs: 0, md: 1 }, // Margin for medium screens and up
                      }}>
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            justifyContent: "center",
                          }}>
                          <Typography variant="h6">0</Typography>
                          <AddIcon />
                        </Box>
                        <Typography
                          sx={{ marginTop: 1, fontSize: "0.8rem" }}
                          color="text.secondary">
                          Sms Credits Left
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card
                      sx={{
                        flex: 1,
                        maxWidth: 200,
                        minWidth: 150,
                        backgroundColor: "#F7F8F9",
                        mx: { xs: 0, md: 1 }, // Margin for medium screens and up
                      }}>
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            justifyContent: "center",
                          }}>
                          <Typography variant="h6">0</Typography>
                        </Box>
                        <Typography
                          sx={{ marginTop: 1, fontSize: "0.8rem" }}
                          color="text.secondary">
                          Live Licenses
                        </Typography>
                      </CardContent>
                    </Card>

                    <Card
                      sx={{
                        flex: 1,
                        maxWidth: 200,
                        minWidth: 150,
                        backgroundColor: "#F7F8F9",
                        mx: { xs: 0, md: 1 }, // Margin for medium screens and up
                      }}>
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            justifyContent: "center",
                          }}>
                          <Typography variant="h6">1 / 5</Typography>
                        </Box>
                        <Typography
                          sx={{ marginTop: 1, fontSize: "0.8rem" }}
                          color="text.secondary">
                          Demo Licenses
                        </Typography>
                      </CardContent>
                    </Card>

                    <Typography
                      sx={{
                        color: "grey",
                        marginLeft: 1,
                        fontSize: "0.8rem",
                      }}>
                      For more details about your billing and licenses, please
                      visit our support page{" "}
                      <Link
                        href=""
                        underline="hover"
                        sx={{ color: "primary.main" }}>
                        contact us
                      </Link>
                      .
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Billing;
