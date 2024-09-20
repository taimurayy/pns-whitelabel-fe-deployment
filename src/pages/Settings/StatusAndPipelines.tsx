import Layout from "../../components/Layout";
import PermanentDrawerLeft from "../../components/SettingsSidebar";
import { Box } from "@mui/material";
import StatusesPage from "../../components/StatusPage";
export default function StatusAndPipelines() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: -3,
        }}>
        <PermanentDrawerLeft />
        <Box sx={{ marginLeft: 30 }}>
          <StatusesPage />
        </Box>
      </Box>
    </Layout>
  );
}
