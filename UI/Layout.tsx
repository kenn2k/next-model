import { Box, Typography } from "@mui/material";
import React from "react";

interface ISectionLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  position?: boolean;
  marginTop?: number;
}
const SectionLayout: React.FC<ISectionLayoutProps> = ({
  title,
  subtitle,
  children,
  fullHeight = false,
  position = false,
  marginTop = 0,
}) => {
  return (
    <Box
      height={fullHeight ? "calc(100vh - 88px)" : "100%"}
      position={position ? "relative" : "static"}
      mt={marginTop}
    >
      <Typography
        variant="h3"
        fontWeight="500"
        sx={{ typography: { xs: "h4", md: "h3" } }}
        lineHeight={1}
        color="info"
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{ typography: { xs: "body1", md: "h6" } }}
        lineHeight={2}
        marginBottom={3}
        color="info"
      >
        {subtitle}
      </Typography>
      {children}
    </Box>
  );
};

export default SectionLayout;