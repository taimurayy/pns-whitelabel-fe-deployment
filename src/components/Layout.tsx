import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import Sidebar from "./NewNavbar";
import TopNavbar from "./TopNavbar";
import { useMediaQuery, useTheme } from "@mui/material";
interface LayoutProps {
  children: React.ReactNode;
  differentBg?: boolean;
}

export default function Layout({
  children,
  differentBg = false,
}: LayoutProps): React.JSX.Element {
  const [selectedHeading, setSelectedHeading] = useState("Dashboard");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // Adjust the breakpoint as needed

  const handleSelectionChange = (heading: string) => {
    setSelectedHeading(heading);
  };
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        zIndex: 2,
      }}>
      {/* Top Bar with Logout Button */}
      {!isSmallScreen && <TopNavbar selectedHeading={selectedHeading} />}
      <Box
        sx={{
          display: "flex",
          flex: 1,

          backgroundSize: "cover", // Optional: to cover the entire Box
          backgroundPosition: "center", // Optional: center the image
          backgroundRepeat: "no-repeat",
          margin: "-8px",
        }}>
        <Sidebar onSelectionChange={handleSelectionChange} />

        <Box
          sx={{
            background: differentBg ? "#f8f8f8" : "inherit",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}>
          <Container
            maxWidth="xl"
            sx={{ py: 3, marginTop: 26, mt: isSmallScreen ? 2 : 26 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
// import React from "react";
// import { Box, CssBaseline, Toolbar } from "@mui/material";
// import Sidebar from "./NewNavbar"; // Adjust the import path as needed

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <Sidebar />
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           bgcolor: "#f0f0f0", // Light background color for the main content area
//           p: 3, // Padding around the main content
//           minHeight: "100vh", // Ensure the main content area takes up at least the full viewport height
//         }}>
//         <Toolbar />{" "}
//         {/* To push content down below the fixed AppBar if you have one */}
//         {children} {/* Render the content passed as children */}
//       </Box>
//     </Box>
//   );
// };

// export default Layout;

// import React from "react";
// // Adjust the import path as needed
// import Sidebar from "./NewNavbar"; // Adjust the import path as needed
// import { Box } from "@mui/material";

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
//       <Box sx={{ display: "flex", flexGrow: 1 }}>
//         <Sidebar />
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             bgcolor: "#f0f0f0",
//             p: 3,
//             minHeight: "100vh",
//           }}>
//           {children}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Layout;
// Layout.tsx
// import React from "react";
// import Sidebar from "./NewNavbar"; // Adjust the import path as needed
// import TopNavbar from "./TopNavbar"; // Adjust the import path as needed
// import { useState } from "react";
// import { Box } from "@mui/material";

// const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [selectedHeading, setSelectedHeading] = useState("Dashboard");

//   const handleSelectionChange = (heading: string) => {
//     setSelectedHeading(heading);
//   };
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100vh",
//         overflow: "hidden",
//       }}>
//       <Sidebar onSelectionChange={handleSelectionChange} />
//       <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
//         <TopNavbar selectedHeading={selectedHeading} />
//         <Box
//           component="main"
//           sx={{
//             flexGrow: 1,
//             overflowY: "auto", // Allow vertical scrolling if content exceeds height
//             overflowX: "hidden", //// Allow scrolling only if necessary within this area
//             maxHeight: "calc(100vh - 64px)",
//             p: 3,
//             pt: 8, // Add padding top to avoid overlap with TopNavbar
//           }}>
//           {children}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Layout;
//THIS IS THE LAYOUT MAIN IMP!!
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import { useState } from "react";
// import Sidebar from "./NewNavbar";
// import TopNavbar from "./TopNavbar";
// // Make sure to create this component
// import layout from "../assets/l.png";
// interface LayoutProps {
//   children: React.ReactNode;
// }

// export default function Layout({ children }: LayoutProps): React.JSX.Element {
//   const [selectedHeading, setSelectedHeading] = useState("Dashboard");
//   const handleSelectionChange = (heading: string) => {
//     setSelectedHeading(heading);
//   };
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         minHeight: "100vh",
//         flexDirection: "column",
//         zIndex: 2,
//       }}>
//       {/* Top Bar with Logout Button */}
//       <TopNavbar selectedHeading={selectedHeading} />
//       <Box
//         sx={{
//           display: "flex",
//           flex: 1,
//           backgroundImage: `url(${layout})`,
//           backgroundSize: "cover", // Optional: to cover the entire Box
//           backgroundPosition: "center", // Optional: center the image
//           backgroundRepeat: "no-repeat",
//           margin: "-8px",
//         }}>
//         <Sidebar onSelectionChange={handleSelectionChange} />

//         <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
//           <Container maxWidth="xl" sx={{ py: 3, marginTop: 26 }}>
//             {children}
//           </Container>
//         </Box>
//       </Box>
//     </Box>
//   );
// }
