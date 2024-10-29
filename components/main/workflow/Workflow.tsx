import WorkflowCard from "@/components/main/workflow/card/WorkflowCard";
import Slider from "@/components/main/workflow/slider/Slider";
import { Box, CardMedia, Typography } from "@mui/material";

const Workflow = () => {
  return (
    <>
      <Box height="100%" position="relative" mt={14}>
        <Typography
          variant="h3"
          sx={{ typography: { xs: "h4", md: "h3" } }}
          lineHeight={1}
          color="info"
          fontWeight="500"
        >
          How We Work
        </Typography>
        <Typography
          variant="h6"
          sx={{ typography: { xs: "body1", md: "h6" } }}
          lineHeight={1}
          marginBottom={3}
          color="info"
        >
          Process: From Planning to Delivery, Moving Simplified.
        </Typography>
        <CardMedia
          sx={{
            position: "absolute",
            top: "50%",
            right: -100,
            transform: "translateY(-50%)",
            width: 466,
            height: 466,
            display: { xs: "none", xl: "block" },
          }}
          component="img"
          image="/image.svg"
          alt="image"
        />
        <WorkflowCard />
      </Box>
      <Slider />
    </>
  );
};

export default Workflow;
