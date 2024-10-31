import { CardActions, Button, Link } from "@mui/material";

const CardBtn = () => {
  return (
    <CardActions sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
      <Button
        variant="contained"
        sx={{
          color: "white",
          borderRadius: 4,
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
          padding: { xs: "6px 12px", sm: "8px 16px" },
          backgroundColor: "orange",
        }}
      >
        Book Now
      </Button>
      <Link
        href="#"
        color="success.main"
        sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" } }}
      >
        Learn More
      </Link>
    </CardActions>
  );
};

export default CardBtn;
