import { useState } from "react";
import { Typography, Box, Divider } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DataObjectIcon from "@mui/icons-material/DataObject";
import SchedulingLinksComp from "./SchedulingLinkcomponent";

const SchedulingLinksOptions = () => {
  const [selected, setSelected] = useState("Mylinks");

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
            color: selected === "Mylinks" ? "black" : "grey",
            borderBottom: selected === "Mylinks" ? "2px solid black" : "none",
            paddingBottom: "8px",
            cursor: "pointer",
          }}
          onClick={() => handleSelect("Mylinks")}>
          <CalendarMonthIcon sx={{ mt: 0.5, mr: 1 }} />
          My Links
        </Typography>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: selected === "tags" ? "black" : "grey",
            borderBottom: selected === "tags" ? "2px solid black" : "none",
            paddingBottom: "8px",
            mr: 2,
            cursor: "pointer",
          }}
          onClick={() => handleSelect("tags")}>
          <DataObjectIcon sx={{ mt: 0.5, mr: 1 }} />
          Template Tags
        </Typography>
      </Box>
      <Divider sx={{ mt: -2, width: "104.5%", ml: -6 }} />
      <Box sx={{ mt: 2, ml: 2 }}>
        {selected === "Mylinks" && <SchedulingLinksComp />}
      </Box>
    </Box>
  );
};

export default SchedulingLinksOptions;
