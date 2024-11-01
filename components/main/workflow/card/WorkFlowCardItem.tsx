import { icons } from "@/components/main/workflow/card/Icons";
import { CardProps } from "@/types/types";
import { Box, Typography } from "@mui/material";

const WorkFlowCardItem = ({ title, description }: CardProps) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {icons[title] && (
          <Box
            sx={{
              marginRight: 2,
              backgroundColor: "success.main",
              borderRadius: "50%",
              color: "white",
              padding: "0.4rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icons[title]}
          </Box>
        )}
        <Typography
          component="div"
          sx={{
            lineHeight: { xs: 1, lg: 2 },

            typography: { xs: "h6", md: "h5" },
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography variant="body1" component="div" lineHeight={1.5} mb={1.5}>
        {description}
      </Typography>
    </>
  );
};

export default WorkFlowCardItem;
