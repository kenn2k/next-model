"use client";
import MobileMenu from "@/components/navbar/MobileMenu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
const pages = ["Services", "Pricing", "FAQ", "Company"];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <AppBar
      position="static"
      className="mt-10"
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
            variant="body1"
            noWrap
            color="info"
            sx={{ mr: 2, fontWeight: "bold" }}
          >
            ConcordMoving
          </Typography>
          {isMobile ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              <Button onClick={handleDrawerToggle} color="info">
                <MenuIcon />
              </Button>
              <MobileMenu
                open={drawerOpen}
                onClose={handleDrawerToggle}
                pages={pages}
              />
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {pages.map((item) => (
                <Box key={item}>
                  <Button sx={{ fontSize: "1rem" }} color="info">
                    {item}
                  </Button>
                </Box>
              ))}
            </Box>
          )}
          <Box
            sx={{
              alignItems: "center",
              gap: "1rem",
              display: { xs: "none", md: "flex" },
            }}
          >
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
