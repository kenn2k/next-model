import { Box, Button } from "@mui/material";
import React from "react";
import data from "@/data.json";
const Navigator = () => {
  const navBtn = data.navBtn;
  return (
    <Box display="flex" justifyContent="space-between" marginBottom={4}>
      {navBtn.map((btn) => (
        <Button variant="contained" color="success" key={btn.id}>
          {btn.title}
        </Button>
      ))}
    </Box>
  );
};

export default Navigator;
