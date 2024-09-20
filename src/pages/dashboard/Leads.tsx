import Layout from "../../components/Layout";
import { Box } from "@mui/material";
import LeadsPage from "../../components/LeadsHeader";
export default function Leads() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // margin: -3,
          marginLeft: -6,
          marginTop: -3,
        }}>
        <LeadsPage />
      </Box>
    </Layout>
  );
}
