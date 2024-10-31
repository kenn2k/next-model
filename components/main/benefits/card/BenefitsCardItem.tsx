import { CardProps } from "@/types/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
interface IconsType {
  [key: string]: JSX.Element;
}
const BenefitsCardItem = ({ description, title }: CardProps) => {
  const icons: IconsType = {
    "Free Quotes": (
      <Image
        src="/quotes.svg"
        alt="Loading and Transportation"
        width={32}
        height={32}
      />
    ),
    "Licensed and Insured": (
      <Image
        src="/licensed.svg"
        alt="Loading and Transportation"
        width={32}
        height={32}
      />
    ),
    "Upfront and Honest Pricing": (
      <Image
        src="/pricing.svg"
        alt="Loading and Transportation"
        width={32}
        height={32}
      />
    ),
    "Expert Packing Services": (
      <Image
        src="/expertPacking.svg"
        alt="Loading and Transportation"
        width={32}
        height={32}
      />
    ),
    "Comprehensive Planning": (
      <Image
        src="/calendar.svg"
        alt="Loading and Transportation"
        width={32}
        height={32}
      />
    ),
    "Flexible Scheduling": (
      <Image
        src="/scheduling.svg"
        alt="Loading and Transportation"
        width={32}
        height={32}
      />
    ),
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
      <Typography variant="body1" component="div" lineHeight={1.5} mb={1.5}>
        {description}
      </Typography>
    </Box>
  );
};

export default BenefitsCardItem;
