import BenefitsCard from "@/components/main/benefits/card/BenefitsCard";
import BenefitsVideo from "@/components/main/benefits/video/BenefitsVideo";
import SectionLayout from "@/UI/Layout";
import { Box, Typography } from "@mui/material";
import React from "react";

const Benefits = () => {
  return (
    <SectionLayout
      title="Our benefits"
      subtitle="Why Choose Us? Unmatched Service, Reliability, and Care."
      fullHeight={false}
      marginTop={14}
    >
      <BenefitsCard />
      <BenefitsVideo />
    </SectionLayout>
  );
};

export default Benefits;
