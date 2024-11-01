"use client";
import {
  Box,
  Container,
  Divider,
  Link,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

import CompanyInfo from "@/components/footer/CompanyInfo";
import Services from "@/components/footer/Services";
import Contact from "@/components/footer/Contact";
import Company from "@/components/footer/Company";
const Footer = () => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Container maxWidth="lg">
      <Box
        mt={14}
        mb={4}
        p={4}
        sx={{
          background:
            "linear-gradient(90deg, rgba(251,240,212,1) 0%, rgba(216,224,246,1) 100%)",
          borderRadius: 8,
          color: "info.main",
        }}
      >
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <CompanyInfo />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Services isSmallScreen={isSmallScreen} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Company isSmallScreen={isSmallScreen} />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Contact isSmallScreen={isSmallScreen} />
          </Grid>
        </Grid>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            mt: { xs: "1rem", lg: "none" },
            flexDirection: "column",
          }}
        >
          <Typography variant="body2">
            Fully licensed and insured company:
          </Typography>
          <Typography variant="caption">
            UBI #60011878 <br /> UTC: THG056947 <br /> DOT No. 3246649
          </Typography>
        </Box>
        <Divider sx={{ color: "#FBFCFC", mt: "1rem" }} />
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
