import ReviewsCardItem from "@/components/main/reviews/card/ReviewsCardItem";
import data from "@/data.json";
import { ReviewProps } from "@/types/types";
import UniversalCardLayout from "@/UI/Card";
import CardContainer from "@/UI/Card";
import { Box } from "@mui/material";

const ReviewsCard = () => {
  return (
    <UniversalCardLayout
      variant="reviews"
      data={data.reviews}
      CardItemComponent={ReviewsCardItem}
      containerProps={{
        mt: 3,
        gap: 6,
        display: { xs: "none", lg: "flex" },
      }}
    />
  );
};

export default ReviewsCard;
