import { ReviewProps } from "@/types/types";
import { Box, Rating, Typography } from "@mui/material";

const ReviewsCardItem = ({ content, author, title }: ReviewProps) => {
  return (
    <Box
      p={2}
      sx={{
        borderColor: "secondary.main",
        width: "354px",
        height: "363px",
        flexShrink: 0,
        borderRadius: 8,
      }}
      border={1}
    >
      <Rating name="read-only" value={5} readOnly />
      <Typography sx={{ fontWeight: { sm: 400, lg: 500 } }} variant="h5">
        &ldquo;{title}&rdquo;
      </Typography>
      <Typography variant="body1">{content}</Typography>
      <Typography textAlign="end" fontWeight="600" variant="body1">
        {author}
      </Typography>
    </Box>
  );
};

export default ReviewsCardItem;
