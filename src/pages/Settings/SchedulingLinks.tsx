import Layout from "../../components/Layout";
import PermanentDrawerLeft from "../../components/SettingsSidebar";
import { Box } from "@mui/material";
import SchedulingLinksOptions from "../../components/SchedulingLinks/SchedulingLinksoptions";
export default function SchedulingLinks() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: -3,
        }}>
        <PermanentDrawerLeft />
        <Box sx={{ marginLeft: 33, mt: 2 }}>
          <SchedulingLinksOptions />
        </Box>
      </Box>
    </Layout>
  );
}
