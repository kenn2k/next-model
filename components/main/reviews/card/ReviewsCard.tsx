import ReviewsCardItem from "@/components/main/reviews/card/ReviewsCardItem";
import data from "@/data.json";

import UniversalCardLayout from "@/UI/Card";

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
