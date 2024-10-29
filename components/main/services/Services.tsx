import React from "react";

import Navigator from "@/components/main/services/navigator/Navigator";
import ServiceCard from "@/components/main/services/card/ServiceCard";
import SectionLayout from "@/UI/Layout";
const Services = () => {
  return (
    <SectionLayout
      title="Moving Services in Seattle"
      subtitle="Expert Solutions for Residential and Commercial Moves."
      fullHeight={false}
      marginTop={14}
    >
      <Navigator />
      <ServiceCard />
    </SectionLayout>
  );
};

export default Services;
