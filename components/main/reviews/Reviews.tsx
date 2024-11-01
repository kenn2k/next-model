import { Box, Pagination, Typography } from "@mui/material";

import ReviewsCard from "@/components/main/reviews/card/ReviewsCard";
import ReviewsBtn from "@/components/main/reviews/navigation/ReviewsBtn";
import Cases from "@/components/main/reviews/cases/Cases";

import FAQ from "@/components/main/reviews/faq/FAQ";
const Reviews = () => {
  return (
    <Box height="100%" mt={14}>
      <Box display="flex" justifyContent="space-between" alignContent="center">
        <Typography
          sx={{ typography: { xs: "h4", md: "h3" } }}
          variant="h3"
          lineHeight={1}
        >
          Testimonials
        </Typography>
        <ReviewsBtn />
      </Box>
      <Typography
        variant="h6"
        sx={{ typography: { xs: "body1", md: "h6" } }}
        lineHeight={2}
        marginBottom={3}
      >
        See What Our Happy Customers Have to Say.
      </Typography>
      <ReviewsCard />
      <Pagination
        color="info"
        sx={{
          display: { xs: "none", lg: "flex" },
          justifyContent: "center",
          mt: 4,
        }}
        count={10}
      />
      <Cases />
      <FAQ />
    </Box>
  );
};

export default Reviews;
