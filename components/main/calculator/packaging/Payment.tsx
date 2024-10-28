import { Box, Button, TextField } from "@mui/material";
import React from "react";

const Payment = () => {
  return (
    <Box display="flex" alignItems="end" gap={3} mb={6}>
      <TextField
        size="medium"
        type="tel"
        label="Phone Number"
        placeholder="+1 (___) ___-____"
        sx={{ flex: 1 }}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />
      <Button
        variant="contained"
        color="success"
        size="small"
        sx={{
          borderRadius: 4,
          width: "44%",
          fontSize: "0.65rem",
          padding: 1,
        }}
      >
        Payment method
      </Button>
    </Box>
  );
};

export default Payment;
