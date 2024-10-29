import { Box, Card } from "@mui/material";
import data from "@/data.json";
import BenefitsCardItem from "@/components/main/benefits/card/BenefitsCardItem";
import { CardProps } from "@/types/types";
import CardContainer from "@/UI/Card";
import UniversalCardLayout from "@/UI/Card";

const BenefitsCard = () => {
  return (
    <UniversalCardLayout
      variant="benefits"
      data={data.benefits}
      CardItemComponent={BenefitsCardItem}
    />
  );
};

export default BenefitsCard;
