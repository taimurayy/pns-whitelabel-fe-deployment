import Layout from "../../components/Layout";
import PermanentDrawerLeft from "../../components/SettingsSidebar";
import { Box } from "@mui/material";
import PhonesandMails from "../../components/Phones&VoiceMailsComp";
export default function PhonesAndVoiceMails() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: -3,
        }}>
        <PermanentDrawerLeft />
        <Box sx={{ marginLeft: 35, mt: 2 }}>
          <PhonesandMails />
        </Box>
      </Box>
    </Layout>
  );
}
