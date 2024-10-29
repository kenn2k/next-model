import { Box, Container, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Box
        mt={14}
        mb={4}
        sx={{
          background:
            "linear-gradient(90deg, rgba(251,240,212,1) 0%, rgba(216,224,246,1) 100%)",
          borderRadius: 8,
          color: "info.main",
          padding: 4,
        }}
      >
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6">Concord Moving</Typography>
            <Typography>
              Your Trusted Partner for a Stress-Free Moving Experience
            </Typography>
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="caption">
                UBI #60011878 <br /> UTC: THG056947 <br /> DOT No. 3246649
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6">Services</Typography>
            <Box sx={{ color: "info.main" }}>
              <Link href="#" color="inherit" underline="none" display="block">
                Apartment and House Moving
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Local Moving
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Long-Distance Moving
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Senior Moving
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Military Moving
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Celebrity Moving
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Office & Business Moving
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Furniture Moving
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Packing Services
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Full-Service Moving
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Last-Minute Moving
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Same-Day Moving
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6">Company</Typography>
            <Box>
              <Link href="#" underline="none" color="inherit" display="block">
                Pricing
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                FAQ
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                About us
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                License
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                Cases
              </Link>
              <Link href="#" underline="none" color="inherit" display="block">
                Blog
              </Link>
              <Link href="#" color="inherit" display="block">
                Contacts
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6">Contact Information</Typography>
            <Box>
              <Typography>Phone number: +1 232 232 454</Typography>
              <Typography>Address: Seattle, Street, 1</Typography>
              <Typography>Email: email@email.com</Typography>
              <Typography>Working hours: 8am-5pm, Mon-Sun</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <Typography textAlign="left" variant="caption">
            © 2024 Concord Moving. All rights reserved.
          </Typography>
          <Box>
            <Link href="#" color="inherit" sx={{ marginRight: 2 }}>
              Privacy Policy
            </Link>{" "}
            <Link href="#" color="inherit">
              Terms & Conditions
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
