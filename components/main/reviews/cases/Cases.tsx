import Pictures from "@/components/main/reviews/cases/Pictures";
import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Cases = () => {
  return (
    <Box
      display="flex"
      width="100%"
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
          variant="h3"
          sx={{
            fontWeight: { xs: 400, lg: 500 },
            typography: { xs: "h4", md: "h3" },
          }}
        >
          Cases
        </Typography>
        <Typography
          variant="h6"
          mt={2}
          sx={{ typography: { xs: "body1", md: "h6" } }}
        >
          Real Stories of Successful Moves with Our Expert Team
        </Typography>
        <Typography
          sx={{ typography: { xs: "body2", md: "body1" } }}
          variant="body1"
          mt={2}
        >
          Discover how we’ve helped customers navigate their unique moving
          challenges with ease. From complex long-distance relocations to
          seamless local moves, our expert team delivers exceptional results
          every time.
        </Typography>
        <Link color="success.main" sx={{ mt: "auto", alignSelf: "flex-start" }}>
          Learn More
        </Link>
      </Box>
      <Box height="100%" sx={{ flex: 1, mt: { xs: 3, sm: 0 } }}>
        <Pictures />
      </Box>
    </Box>
  );
};

export default Cases;
