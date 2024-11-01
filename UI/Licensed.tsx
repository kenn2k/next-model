import { Box, Typography } from "@mui/material";

const Licensed = () => {
  return (
    <Box
      width="100%"
      p={3}
      mt={11}
      sx={{
        background: "linear-gradient(90deg, #faf1ed 0%, #fadbc1 100%)",
        borderRadius: 8,
      }}
    >
      <Typography variant="h3">Licensed and Insured</Typography>
      <Typography variant="h6" lineHeight={2}>
        Comprehensive Coverage for a Safe, Compliant Move.
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography lineHeight={2} variant="body1" my={2}>
          Our moving company is fully licensed and insured, complying with all{" "}
          <br />
          regulatory standards. Enjoy added security, knowing that your <br />
          belongings are protected against any unforeseen events during the{" "}
          <br />
          move.
        </Typography>
        <Typography lineHeight={2} my={2}>
          UBI #60011878 <br /> UTC: THG056947 <br /> DOT No. 3246649
        </Typography>
      </Box>
    </Box>
  );
};

export default Licensed;
