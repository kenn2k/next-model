import Payment from "@/components/main/calculator/packaging/Payment";
import {
  ToggleButtonGroup,
  Box,
  Button,
  ToggleButton,
  Typography,
} from "@mui/material";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import PlumbingIcon from "@mui/icons-material/Plumbing";
const Packaging = () => {
  return (
    <>
      <Typography>Packaging Services</Typography>
      <ToggleButtonGroup exclusive fullWidth sx={{ mb: 2 }}>
        <ToggleButton sx={{ borderRadius: 4 }} value="none">
          None
        </ToggleButton>
        <ToggleButton value="partial">Partial</ToggleButton>
        <ToggleButton sx={{ borderRadius: 4 }} value="full">
          Full
        </ToggleButton>
      </ToggleButtonGroup>

      <Box display="flex" gap={5} mb={2}>
        <Button
          variant="contained"
          color="success"
          startIcon={<LocalShippingIcon />}
          sx={{ flex: 1, fontSize: "0.65rem", borderRadius: 4, padding: 1 }}
        >
          Heavy items
        </Button>
        <Button
          variant="contained"
          color="success"
          startIcon={<PlumbingIcon />}
          sx={{ flex: 1, fontSize: "0.65rem", borderRadius: 4, padding: 1 }}
        >
          Items to Assemble
        </Button>
      </Box>

      <Payment />
    </>
  );
};

export default Packaging;
