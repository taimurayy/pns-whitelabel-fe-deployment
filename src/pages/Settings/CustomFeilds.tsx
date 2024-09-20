import Layout from "../../components/Layout";
import PermanentDrawerLeft from "../../components/SettingsSidebar";
import { Box } from "@mui/material";
import CustomFeildPage from "../../components/CustomFeildTable";
export default function CustomFeilds() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: -3,
        }}>
        <PermanentDrawerLeft />
        <Box sx={{ marginLeft: 28 }}>
          <CustomFeildPage />
        </Box>
      </Box>
    </Layout>
  );
}
