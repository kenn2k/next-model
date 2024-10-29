import BenefitsCard from "@/components/main/benefits/card/BenefitsCard";
import BenefitsVideo from "@/components/main/benefits/video/BenefitsVideo";
import { Box, Typography } from "@mui/material";
import React from "react";

const Benefits = () => {
  return (
    <Box height="calc(100vh-88px)" mt={14}>
      <Typography
        variant="h3"
        fontWeight="500"
        sx={{ typography: { xs: "h4", md: "h3" } }}
        lineHeight={1}
        color="info"
      >
        Our benefits
      </Typography>
      <Typography
        variant="h6"
        sx={{ typography: { xs: "body1", md: "h6" } }}
        lineHeight={2}
        marginBottom={3}
        color="info"
      >
        Why Choose Us? Unmatched Service, Reliability, and Care.
      </Typography>
      <BenefitsCard />
      <BenefitsVideo />
    </Box>
  );
};

export default Benefits;
