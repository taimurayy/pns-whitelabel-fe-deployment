import Layout from "../../components/Layout";
import PermanentDrawerLeft from "../../components/SettingsSidebar";
import { Box } from "@mui/material";
import UserRoles from "../../components/UserRoles";
export default function RolesAndPermissions() {
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
          <UserRoles />
        </Box>
      </Box>
    </Layout>
  );
}
