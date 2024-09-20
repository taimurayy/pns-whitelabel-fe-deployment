import Layout from "../../components/Layout";
import PermanentDrawerLeft from "../../components/SettingsSidebar";
import { Box } from "@mui/material";
import TeamManagementcomp from "../../components/TeamManagmentComponent";
export default function TeamManagement() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: -3,
        }}>
        <PermanentDrawerLeft />
        <Box sx={{ marginLeft: 35, mt: 4 }}>
          <TeamManagementcomp />
        </Box>
      </Box>
    </Layout>
  );
}
