'use client';

import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Dish } from '@/modules/menu/types';

export default function DishDetailInfo({ dish }: { dish: Dish }) {
  return (
    <Box>
      <Typography variant="h2">{dish.name}</Typography>
      <Typography sx={{ color: 'var(--muted)', mt: 1 }}>{dish.categoryId}</Typography>

      <Typography variant="h4" sx={{ mt: 2, fontWeight: 700 }}>
        {dish.price.toLocaleString('vi-VN')}₫
      </Typography>

      <Typography sx={{ mt: 3, lineHeight: 1.7 }}>{dish.description}</Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button
          variant="contained"
          sx={{ background: 'var(--primary)' }}
          onClick={() => alert(`Thêm ${dish.name} vào giỏ (demo)`)}
        >
          Thêm vào giỏ
        </Button>

        <Button variant="outlined" href="/menu">
          Quay lại menu
        </Button>
      </Stack>
    </Box>
  );
}
