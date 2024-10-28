import React from "react";
import { Box, Typography } from "@mui/material";
import Navigator from "@/components/main/services/navigator/Navigator";
import ServiceCard from "@/components/main/services/card/ServiceCard";
const Services = () => {
  return (
    <Box height="100%">
      <Typography variant="h3" lineHeight={1} color="info">
        Moving Services in Seattle
      </Typography>
      <Typography variant="h6" lineHeight={2} marginBottom={3} color="info">
        Expert Solutions for Residential and Commercial Moves.
      </Typography>
      <Navigator />
      <ServiceCard />
    </Box>
  );
};

export default Services;
