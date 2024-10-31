import CardBtn from "@/components/main/services/card/ServiceCardBtn";
import { ServiceCardProps } from "@/types/types";

import { Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
const ServiceCardItem = ({
  description,
  features,
  title,
}: ServiceCardProps) => {
  return (
    <Grid container justifyContent="center" size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        sx={{
          height: "100%",
          maxWidth: { xs: "340px", lg: "100%" },
          padding: { xs: 1, sm: 2 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: 3,
          borderRadius: 8,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "secondary.main",
            zIndex: 1,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
        <CardContent sx={{ paddingBottom: 1 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: "1rem", sm: "1.2rem" },
              lineHeight: 1,
              fontWeight: { sm: 400, lg: 500 },
              color: "info.main",
              marginBottom: { xs: 1, sm: 2 },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              marginBottom: { xs: 1, sm: 2 },
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="body1"
            component="ul"
            sx={{
              listStyleType: "disc",
              paddingLeft: 2,
              marginBottom: { xs: 1, sm: 2 },
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              color: "info.main",
            }}
          >
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </Typography>
        </CardContent>

        <CardBtn />
      </Card>
    </Grid>
  );
};

export default ServiceCardItem;
