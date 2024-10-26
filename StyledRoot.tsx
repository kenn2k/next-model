"use client";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material/styles";

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
