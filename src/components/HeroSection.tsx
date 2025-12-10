"use client";
import { heroData } from "@/app/(home)/utils/homeData";
import { Box, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box className="hero-wrapper">
      <img src={heroData.image} alt="hero" />

      <Box className="hero-content">
        <Typography variant="h3" fontWeight={700}>
          {heroData.title}
        </Typography>

        <Typography variant="h6" mt={2}>
          {heroData.subtitle}
        </Typography>

        <Button
          variant="contained"
          sx={{ mt: 4, bgcolor: "#C62828", px: 4, py: 1.5 }}
          href="/menu"
        >
          Xem Menu
        </Button>
      </Box>
    </Box>
  );
}
