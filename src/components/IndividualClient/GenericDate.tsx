import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

interface BasicDatePickerProps {
  label: string;
  sx?: React.CSSProperties; // Optional sx prop
}

export default function BasicDatePicker({ label, sx }: BasicDatePickerProps) {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(null);

  const handleChange = (date: dayjs.Dayjs | null) => {
    setSelectedDate(date);
    if (date) {
      localStorage.setItem("date", date.toISOString());
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{ width: "65%", ...sx }} // Apply custom styles
        label={label} // Use the label prop
        value={selectedDate}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
}
