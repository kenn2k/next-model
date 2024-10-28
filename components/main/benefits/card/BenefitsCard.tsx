import { Box, Card } from "@mui/material";
import data from "@/data.json";
import BenefitsCardItem from "@/components/main/benefits/card/BenefitsCardItem";
import { CardProps } from "@/types/types";

const BenefitsCard = () => {
  const firstGroup = data.benefits.slice(0, 3);
  const secondGroup = data.benefits.slice(3, 6);
  return (
    <Box
      display="flex"
      height="100%"
      justifyContent="center"
      gap={3}
      alignItems="center"
      sx={{
        flexDirection: { xs: "column", sm: "column", md: "row" },
      }}
    >
      <Card
        sx={{
          padding: 3,
          display: "flex",
          gap: 3,
          flexDirection: "column",
          borderRadius: 4,
          maxWidth: "500px",
        }}
      >
        {firstGroup.map((service: CardProps) => (
          <BenefitsCardItem
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </Card>

      <Card
        sx={{
          padding: 3,
          borderRadius: 4,
          maxWidth: "500px",
          display: "flex",
          gap: 3,
          flexDirection: "column",
        }}
      >
        {secondGroup.map((service) => (
          <BenefitsCardItem
            key={service.id}
            title={service.title}
            description={service.description}
          />
        ))}
      </Card>
    </Box>
  );
};

export default BenefitsCard;
