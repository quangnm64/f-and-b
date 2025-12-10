"use client";

import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Button,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { Dish } from "@/modules/menu/types";
import { useOrder } from "@/context/OrderContext"; // ⭐ cần đúng path của bạn

export default function DishCard({ dish }: { dish: Dish }) {
  const router = useRouter();
  const { addItem } = useOrder();

  const handleAddToCart = () => {
    addItem({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      quantity: 1,
      image: dish.image,
    });
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        cursor: "pointer",
        transition: "0.25s ease",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        ":hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* IMAGE */}
      <Box onClick={() => router.push(`/menu/${dish.slug}`)}>
        <CardMedia
          component="img"
          image={dish.image}
          alt={dish.name}
          sx={{
            height: 180,
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* CONTENT */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          pt: 1.5,
        }}
      >
        {/* NAME */}
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ cursor: "pointer" }}
          onClick={() => router.push(`/menu/${dish.slug}`)}
        >
          {dish.name}
        </Typography>

        {/* PRICE + BUTTONS */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          sx={{ marginTop: "auto" }}
        >
          <Typography sx={{ fontWeight: 700, color: "#ff6600" }}>
            {dish.price.toLocaleString("vi-VN")}₫
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button
              size="small"
              variant="text"
              onClick={() => router.push(`/menu/${dish.slug}`)}
            >
              Chi tiết
            </Button>

            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#ff6600",
                ":hover": { backgroundColor: "#e65c00" },
              }}
              onClick={handleAddToCart}
            >
              Thêm
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
