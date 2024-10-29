import { CardProps } from "@/types/types";
import { Box, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
interface IconsType {
  [key: string]: JSX.Element;
}
const BenefitsCardItem = ({ description, title }: CardProps) => {
  const icons: IconsType = {
    "Free Quotes": <PeopleAltIcon />,
    "Licensed and Insured": <PeopleAltIcon />,
    "Upfront and Honest Pricing": <PeopleAltIcon />,
    "Expert Packing Services": <PeopleAltIcon />,
    "Comprehensive Planning": <PeopleAltIcon />,
    "Flexible Scheduling": <PeopleAltIcon />,
  };

  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex" alignItems="center">
        {icons[title] && (
          <Box
            sx={{
              marginRight: 2,
              backgroundColor: "error.main",
              borderRadius: "50%",
              color: "success.main",
              padding: "0.3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icons[title]}
          </Box>
        )}
        <Typography
          color="info"
          component="div"
          fontWeight="500"
          sx={{
            lineHeight: { xs: 1, lg: 2 },
            fontWeight: { sm: 400, lg: 500 },
            typography: { xs: "h6", md: "h5" },
          }}
        >
          {title}
        </Typography>
      </Box>
      <Typography
        color="info"
        variant="body1"
        component="div"
        lineHeight={1.5}
        mb={1.5}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default BenefitsCardItem;
