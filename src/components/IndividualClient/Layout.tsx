import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Sidebar from "./Sidebar";
import TopBar from "./TopNavbar";
import { useMediaQuery, useTheme } from "@mui/material";
interface LayoutProps {
  children: React.ReactNode;
  differentBg?: boolean;
}

export default function MainLayout({
  children,
  differentBg = false,
}: LayoutProps): React.JSX.Element {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Adjust the breakpoint as needed

  return (
    <Box
      sx={{
        display: "flex",
        // minHeight: "100vh",
        flexDirection: "column",
        zIndex: 0,
      }}>
      {/* Top Bar with Logout Button */}
      <Box>{!isSmallScreen && <TopBar />}</Box>
      <Box
        sx={{
          display: "flex",
          flex: 1,

          backgroundSize: "cover", // Optional: to cover the entire Box
          backgroundPosition: "center", // Optional: center the image
          backgroundRepeat: "no-repeat",
          margin: "-8px",
        }}>
        <Sidebar />

        <Box
          sx={{
            background: differentBg ? "#f8f8f8" : "#f7f8f9",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
          }}>
          <Container
            maxWidth="xl"
            sx={{ py: 3, marginTop: 10, mt: isSmallScreen ? 2 : 10 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
