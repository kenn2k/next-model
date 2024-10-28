import { Box, Button, Slider, TextField, Typography } from "@mui/material";

import HouseIcon from "@mui/icons-material/House";

import KeyIcon from "@mui/icons-material/Key";

import Packaging from "@/components/main/calculator/packaging/Packaging";
const Calculator = () => {
  return (
    <Box
      sx={{
        p: 3,
        maxWidth: 400,
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 3,
        position: "relative",
        zIndex: 2,
      }}
    >
      <Typography
        variant="h6"
        align="center"
        color="primary"
        gutterBottom
        sx={{
          position: "absolute",
          zIndex: 1,
          top: -40,
          left: 0,
          right: 0,
          backgroundColor: "secondary.main",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          p: 2,
          boxShadow: 3,
        }}
      >
        Instant quote no email needed
      </Typography>

      <Box display="flex" gap={5} mb={2}>
        <TextField
          fullWidth
          label="Pickup From"
          placeholder="Zip, City or State"
        />
        <TextField
          fullWidth
          label="Drop Off To"
          placeholder="Zip, City or State"
        />
      </Box>

      <Box display="flex" gap={5} mb={2}>
        <Button
          variant="contained"
          color="success"
          size="small"
          startIcon={<KeyIcon />}
          sx={{ flex: 1, fontSize: "0.65rem", borderRadius: 4, padding: 1 }}
        >
          Apartment
        </Button>
        <Button
          variant="contained"
          color="success"
          size="small"
          startIcon={<HouseIcon />}
          sx={{ flex: 1, fontSize: "0.65rem", borderRadius: 4, padding: 1 }}
        >
          House
        </Button>
      </Box>

      <Box display="flex" gap={3} mb={2}>
        <TextField
          fullWidth
          type="date"
          label="Move Date"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <Box display="flex" alignItems="center" gap={1}>
          <TextField
            fullWidth
            label="Movers"
            placeholder="2"
            type="number"
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />
        </Box>
      </Box>

      <Typography gutterBottom>Level of Clutter</Typography>
      <Slider
        defaultValue={50}
        color="success"
        min={0}
        max={100}
        step={1}
        sx={{
          "& .MuiSlider-markLabel": {
            color: "black",
            fontSize: 12,
          },
          "& .MuiSlider-markLabel[data-index='0']": {
            left: "0%",
            transform: "translateX(0%)",
          },
          "& .MuiSlider-markLabel[data-index='1']": {
            left: "100%",
            transform: "translateX(-100%)",
          },
          mb: 3,
        }}
        marks={[
          { value: 0, label: "Minimal" },
          { value: 100, label: "Heavy" },
        ]}
      />

      <Packaging />

      <Box
        display="flex"
        gap={2}
        sx={{
          position: "absolute",
          bottom: -20,
          left: 0,
          right: 0,
          backgroundColor: "secondary.main",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          p: 2,
          boxShadow: 3,
        }}
      >
        <Button
          fullWidth
          variant="contained"
          color="warning"
          sx={{ borderRadius: 4 }}
        >
          Book for
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{ padding: 1, background: "white", borderRadius: 4 }}
        >
          Want a better deal?
        </Button>
      </Box>
    </Box>
  );
};

export default Calculator;
