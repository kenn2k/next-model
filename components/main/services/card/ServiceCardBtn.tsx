import { CardActions, Button, Link } from "@mui/material";

const CardBtn = () => {
  return (
    <CardActions
      sx={{
        display: "flex",
        gap: 2,

        justifyContent: { xs: "center", md: "start" },
      }}
    >
      <Button
        variant="contained"
        sx={{
          color: "white",
          borderRadius: 8,
          boxShadow: "none",
          fontSize: { xs: "0.8rem", md: "0.9rem" },
          padding: { xs: "6px 12px", md: "0.3rem 1.6rem" },
          backgroundColor: "primary.main",
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
