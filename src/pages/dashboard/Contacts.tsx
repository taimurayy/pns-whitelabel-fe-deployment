import Layout from "../../components/Layout";
import { Box } from "@mui/material";
import ContactsTable from "../../components/ContactsTable";
export default function Contacts() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // margin: -3,
          marginLeft: -6,
          marginTop: -6,
        }}>
        <ContactsTable />
      </Box>
    </Layout>
  );
}
