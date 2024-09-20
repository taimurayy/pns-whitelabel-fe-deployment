import { useState } from "react";
import { Typography, Box, Divider } from "@mui/material";
import CustomCard from "./CustomCards";
import PhoneCallbackRoundedIcon from "@mui/icons-material/PhoneCallbackRounded";
import PeopleOutlineRoundedIcon from "@mui/icons-material/PeopleOutlineRounded";
const PhonesandMails = () => {
  const [selected, setSelected] = useState("phonenumbers");

  const handleSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <Box>
      <Box display="flex" sx={{ mb: 2 }}>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mr: 2,
            color: selected === "phonenumbers" ? "black" : "grey",
            borderBottom:
              selected === "phonenumbers" ? "2px solid black" : "none",
            paddingBottom: "8px",
            cursor: "pointer",
          }}
          onClick={() => handleSelect("phonenumbers")}>
          Phones Numbers
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: selected === "regulated" ? "black" : "grey",
            borderBottom: selected === "regulated" ? "2px solid black" : "none",
            paddingBottom: "8px",
            mr: 2,
            cursor: "pointer",
          }}
          onClick={() => handleSelect("regulated")}>
          Regulated Bundles
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: selected === "a2p10dlc" ? "black" : "grey",
            borderBottom: selected === "a2p10dlc" ? "2px solid black" : "none",
            paddingBottom: "8px",
            cursor: "pointer",
          }}
          onClick={() => handleSelect("a2p10dlc")}>
          A2P 10DLC
        </Typography>
      </Box>
      <Divider sx={{ mb: -2, ml: -10 }} />
      <Box>
        <CustomCard
          title="Personal Numbers"
          buttonLabel="Add"
          Icon={PhoneCallbackRoundedIcon}
          headings={["No Phone Numbers"]}
          description="Rent us through us or bring us own."
        />
      </Box>
      <Box>
        <CustomCard
          title="Group Numbers"
          buttonLabel="Add"
          Icon={PeopleOutlineRoundedIcon}
          headings={["No Group Numbers"]}
          description="Incoming calls ring for all members.
          Rent us through us or bring us own."
        />
        <Typography sx={{ fontSize: "1rem", mt: -2, mb: 1 }} color="primary">
          Learn about more group numbers
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ width: "40%" }}>
        <Typography sx={{ fontSize: "2rem", mt: 2 }}>
          Pre-Recorded Voice Mail drop
        </Typography>
        <Typography sx={{ fontSize: "1rem", mt: 1 }}>
          It allows you to record mails and stuff. It allows you to record mails
          and stuff. It allows you to record mails and stuff.
        </Typography>
      </Box>
    </Box>
  );
};

export default PhonesandMails;
