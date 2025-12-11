"use client";

import { TextField, InputAdornment, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch: (keyword: string) => void }) {
  const [value, setValue] = useState("");

  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <TextField
        fullWidth
        placeholder="Tìm món ăn... "
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSearch(e.target.value);
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
          endAdornment: value && (
            <InputAdornment position="end">
              <IconButton onClick={() => { setValue(""); onSearch(""); }}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        sx={{
          background: "#fff",
          borderRadius: 2,
          "& fieldset": { borderRadius: 2 }
        }}
      />
    </Box>
  );
}
