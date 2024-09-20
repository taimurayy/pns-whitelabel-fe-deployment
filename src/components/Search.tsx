import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const options = [
  "Leads",
  "Created",
  "Contacted",
  "Calls",
  "All - All Types",
  "All Total Duration",
  "All-Average Duration",
  "Outbound All Types",
  "Outbound Total Duration",
  "Outbound - Average Duration",
  "Outbound Power Dialer",
  "Outbound Power Dialer Total Duration",
  "Outbound-Power Dialer Average Duration",
  "Outbound Predictive Dialer",
  "Outbound Predictive Dialer Total Duration",
  "Outbound - Predictive Dialer Average Duration",
  "Outbound Regular",
  "Outbound Regular Total Duration",
  "Outbound Regular Average Duration",
  "Outbound External",
  "Outbound External Total Duration",
  "Outbound - External Average Duration",
  "Inbound - All Types",
  "Inbound Total Duration",
  "Inbound - Average Duration",
  "Emails",
  "Sent-All Types",
  "Sent-Workflows",
  "Sent-Workflows with Reply",
  "Sent-Workflows without Reply",
  "Sent-Bulk",
];

export default function SearchComponent() {
  return (
    <Autocomplete
      freeSolo
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ backgroundColor: "#F1F1F1" }}
          style={{ width: "600%" }} // Ensures the field takes full width
        />
      )}
    />
  );
}
