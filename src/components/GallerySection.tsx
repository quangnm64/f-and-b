"use client";
import { galleryImages } from "@/app/(home)/utils/homeData";
import { Box, Typography } from "@mui/material";

export default function GallerySection() {
  return (
    <Box className="section">
      <Typography variant="h4" fontWeight={700} mb={4}>
        Không gian & Món ăn
      </Typography>

      <Box className="gallery-grid">
        {galleryImages.map((src, i) => (
          <img key={i} src={src} alt="gallery" />
        ))}
      </Box>
    </Box>
  );
}
