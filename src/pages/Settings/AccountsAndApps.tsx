import Layout from "../../components/Layout";
import PermanentDrawerLeft from "../../components/SettingsSidebar";
import { Box } from "@mui/material";
import ConnectedAccounts from "../../components/ConnectedAccounts";
export default function AccountsAndApps() {
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
          <ConnectedAccounts />
        </Box>
      </Box>
    </Layout>
  );
}
