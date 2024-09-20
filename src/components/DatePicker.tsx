import { useState, MouseEvent } from "react";
import { Button, Popover } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import dayjs from "dayjs";

export default function BasicDatePicker() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (date: dayjs.Dayjs | null) => {
    setSelectedDate(date);
    if (date) {
      localStorage.setItem("date", date.toISOString());
    }
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Button
        sx={{ color: "black" }}
        onClick={handleClick}
        startIcon={<FilterAltIcon />}
        endIcon={<KeyboardArrowDownRoundedIcon />}>
        {selectedDate ? selectedDate.format("MMM D, YYYY") : "Select Date"}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <div style={{ padding: 16 }}>
          <DatePicker value={selectedDate} onChange={handleChange} />
        </div>
      </Popover>
    </LocalizationProvider>
  );
}
