import Benefits from "@/components/main/benefits/Benefits";
import Reviews from "@/components/main/reviews/Reviews";
import Services from "@/components/main/services/Services";
import Workflow from "@/components/main/workflow/Workflow";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box mt="4rem">
      <Box height="100vh">calculator</Box>
      <Services />
      <Workflow />
      <Benefits />
      <Reviews />
    </Box>
  );
};

export default Main;
{
}
