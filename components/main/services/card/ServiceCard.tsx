import Grid from "@mui/material/Grid2";
import React from "react";
import data from "@/data.json";
import CardItem from "@/components/main/services/card/ServiceCardItem";
import { ServiceCardProps } from "@/types/types";
const ServiceCard = () => {
  const cards = data.cards;
  return (
    <Grid container spacing={8}>
      {cards.map((card: ServiceCardProps) => (
        <CardItem
          key={card.id}
          description={card.description}
          features={card.features}
          title={card.title}
          buttons={card.buttons}
        />
      ))}
    </Grid>
  );
};

export default ServiceCard;
