import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Pictures = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        {" "}
        <Box
          sx={{
            backgroundColor: "#e0e0e0",
            borderRadius: 2,
            height: "328px",
          }}
        />
      </Grid>

      <Grid
        size={{ xs: 12, md: 6 }}
        container
        direction="column"
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Grid size={6}>
          <Box
            sx={{
              backgroundColor: "#e0e0e0",
              borderRadius: 2,
              height: "150px",
              width: "100%",
            }}
          />
        </Grid>
        <Grid size={6}>
          <Box
            sx={{
              backgroundColor: "#e0e0e0",
              borderRadius: 2,
              height: "150px",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pictures;
