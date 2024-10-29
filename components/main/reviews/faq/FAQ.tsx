import Accordions from "@/components/main/reviews/faq/accordion/Accordion";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const FAQ = () => {
  return (
    <Box
      display="flex"
      height="100%"
      mt={14}
      p={4}
      sx={{
        background:
          "linear-gradient(90deg, rgba(251,240,212,1) 0%, rgba(216,224,246,1) 100%)",
        borderRadius: 8,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          flex: 1,
          pr: { sm: 2 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          color="info"
          variant="h3"
          sx={{
            fontWeight: { xs: 400, lg: 500 },
            typography: { xs: "h4", md: "h3" },
          }}
        >
          FAQ
        </Typography>
        <Typography
          color="info"
          variant="h6"
          mt={2}
          sx={{ typography: { xs: "body1", md: "h6" } }}
        >
          Answers to Your Most Common Moving Questions
        </Typography>
        <Typography
          sx={{ typography: { xs: "body2", md: "body1" } }}
          variant="body1"
          color="info"
          mt={2}
        >
          Need more information? Reach us at +1 232 232 454 <br /> or
        </Typography>
        <Box display="flex" gap={2} alignItems="center">
          <Button
            sx={{
              backgroundColor: "primary.main",
              borderRadius: 4,
              color: "white",
            }}
          >
            Contact
          </Button>
          <Typography color="info">for personalized support.</Typography>
        </Box>
      </Box>
      <Box height="100%" sx={{ flex: 1, mt: { xs: 3, sm: 0 } }}>
        <Accordions />
      </Box>
    </Box>
  );
};

export default FAQ;
