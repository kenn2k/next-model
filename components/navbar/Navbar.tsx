import {
  AppBar,
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const pages = ["Services", "Pricing", "FAQ", "Company"];

const Navbar = () => {
  return (
    <AppBar
      position="static"
      className="mt-16"
      color="transparent"
      elevation={0}
    >
      <Container
        maxWidth="lg"
        sx={{
          background:
            "linear-gradient(90deg, rgba(251,240,212,1) 0%, rgba(216,224,246,1) 100%)",
          borderRadius: 8,
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            color="info"
            sx={{ mr: 2, fontWeight: "bold" }}
          >
            ConcordMoving
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            {pages.map((item) => (
              <Box key={item}>
                <Button color="info">Menu {item}</Button>
                <Menu
                  open={false}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem>Option 1</MenuItem>
                  <MenuItem>Option 2</MenuItem>
                  <MenuItem>Option 3</MenuItem>
                </Menu>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Typography color="info" sx={{ marginRight: 2 }}>
              +1 232 232 454
            </Typography>

            <Button
              sx={{
                paddingX: 3,
                paddingY: 1,
                backgroundColor: "primary.main",
                color: "#fff",
                borderRadius: 8,
              }}
            >
              Book Now
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
