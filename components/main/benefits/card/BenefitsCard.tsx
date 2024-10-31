import data from "@/data.json";
import BenefitsCardItem from "@/components/main/benefits/card/BenefitsCardItem";

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
