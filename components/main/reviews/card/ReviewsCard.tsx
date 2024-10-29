import ReviewsCardItem from "@/components/main/reviews/card/ReviewsCardItem";
import data from "@/data.json";
import { ReviewProps } from "@/types/types";
import { Box } from "@mui/material";

const ReviewsCard = () => {
  const reviews = data.reviews;
  return (
    <Box
      display="flex"
      mt={3}
      gap={6}
      sx={{ display: { xs: "none", lg: "flex" } }}
      justifyContent="space-between"
    >
      {reviews.map((review: ReviewProps) => (
        <ReviewsCardItem
          key={review.id}
          content={review.content}
          author={review.author}
          title={review.title}
        />
      ))}
    </Box>
  );
};

export default ReviewsCard;
