"use client";
import { featuredMenu } from "@/app/(home)/utils/homeData";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";

export default function FeaturedMenuSection() {
  return (
    <Box className="section">
      <Typography variant="h4" fontWeight={700} mb={4}>
        Món nổi bật
      </Typography>

      <Box className="featured-grid">
        {featuredMenu.map((item) => (
          <Card
            key={item.id}
            sx={{
              width: 260,
              borderRadius: 3,
              boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
            }}
          >
            <CardMedia
              component="img"
              height="160"
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography fontWeight={600}>{item.name}</Typography>
              <Typography color="error" mt={1}>
                {item.price.toLocaleString()}đ
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
