import React, { useState } from "react";
import { Box, TextField } from "@mui/material";

interface SearchProps {
  onSearch: (query: string) => void; // Prop to handle search queries
}

const SearchComponent: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setSearchTerm(""); // Clear the search input after search
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <TextField
        variant="outlined"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()} // Allow search on Enter key press
        sx={{ marginRight: 0, width: "70%" }}
      />
    </Box>
  );
};

export default SearchComponent;
