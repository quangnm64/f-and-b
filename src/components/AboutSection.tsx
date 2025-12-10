"use client";
import { aboutData } from "@/app/(home)/utils/homeData";
import { Box, Typography } from "@mui/material";

export default function AboutSection() {
  return (
    <Box className="section" display="flex" gap={4} flexWrap="wrap">
      <img
        src={aboutData.image}
        alt="about"
        style={{ width: "420px", borderRadius: "12px" }}
      />

      <Box flex={1}>
        <Typography variant="h4" fontWeight={700}>
          {aboutData.title}
        </Typography>

        <Typography mt={2} color="text.secondary">
          {aboutData.description}
        </Typography>
      </Box>
    </Box>
  );
}
