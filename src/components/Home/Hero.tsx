// src/components/Home/Hero.tsx
'use client';

import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import Link from 'next/link';

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `linear-gradient(90deg, rgba(211,84,0,0.06), rgba(160,64,0,0.03))`,
        borderRadius: 2,
        py: { xs: 6, md: 12 },
        mb: 6
      }}
    >
      <div className="container">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center" justifyContent="space-between">
          <Box sx={{ flex: 1 }}>
            <Typography variant="h1" sx={{ mb: 2, color: 'primary.main', fontWeight: 800 }}>
              Trải nghiệm ẩm thực & thức uống tuyệt hảo
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, maxWidth: 600 }}>
              fandb kết nối bạn với các món ngon & không gian thân mật. Đặt bàn, khám phá menu, và thưởng thức hương vị.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Link href="/menu" style={{ textDecoration: 'none' }}>
                <Button variant="contained" sx={{ backgroundColor: 'var(--primary)' }}>
                  Xem Menu
                </Button>
              </Link>

              <Link href="/booking" style={{ textDecoration: 'none' }}>
                <Button variant="outlined" sx={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>
                  Đặt bàn ngay
                </Button>
              </Link>
            </Stack>
          </Box>

          <Box sx={{ width: { xs: '100%', md: '420px' }, textAlign: 'right' }}>
            <img
              src="/images/banners/hero-food.png"
              alt="hero"
              style={{ width: '100%', maxHeight: 320, objectFit: 'cover', borderRadius: 16, boxShadow: '0 12px 34px rgba(0,0,0,0.08)' }}
            />
          </Box>
        </Stack>
      </div>
    </Box>
  );
}
