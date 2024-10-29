import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Button } from "@mui/material";

const ReviewsBtn = () => {
  return (
    <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
      <Button
        sx={{
          minWidth: "40px",
          width: "40px",
          height: "40px",
          padding: 0,
          "&:hover": {
            backgroundColor: "transparent",
          },
          "&:focus": {
            backgroundColor: "transparent",
          },
          "&:active": {
            backgroundColor: "transparent",
          },
        }}
      >
        <NavigateBeforeIcon
          sx={{
            backgroundColor: "success.main",
            color: "white",
            width: "40px",
            borderRadius: 4,
            height: "40px",
            padding: "8px",
          }}
        />
      </Button>
      <Button
        sx={{
          minWidth: "40px",
          width: "40px",
          height: "40px",
          padding: 0,
        }}
      >
        <NavigateNextIcon
          sx={{
            backgroundColor: "success.main",
            color: "white",
            borderRadius: 4,
            width: "40px",
            height: "40px",
            padding: "8px",
          }}
        />
      </Button>
    </Box>
  );
};

export default ReviewsBtn;
