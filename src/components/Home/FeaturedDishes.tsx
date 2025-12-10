// src/components/Home/FeaturedDishes.tsx
'use client';

import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, Stack } from '@mui/material';
import Link from 'next/link';
import  dishes  from '@/data/dishes';
import { useRouter } from 'next/navigation';
import { Dish } from '@/modules/menu/types';

type Props = {
  items?: Dish[];
};

function formatCurrency(v: number) {
  return v.toLocaleString('vi-VN') + '₫';
}

export default function FeaturedDishes({ items = dishes }: Props) {
  const router = useRouter();

  return (
    <Box component="section" sx={{ mb: 6 }}>
      <div className="container">
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h3">Món nổi bật</Typography>
          <Link href="/menu" style={{ color: 'var(--primary)' }}>Xem tất cả</Link>
        </Stack>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {items.slice(0, 4).map((d) => (
            <Card key={d.id} className="card" sx={{ width: { xs: '100%', sm: '48%', md: '23%' }, p: 0 }}>
              <CardMedia
                component="img"
                image={d.image}
                alt={d.name}
                sx={{ height: 160, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
              />
              <CardContent>
                <Typography variant="h4" sx={{ fontSize: '1rem', fontWeight: 700 }}>{d.name}</Typography>
                {/* <Typography variant="body2" sx={{ mt: 1, color: 'var(--muted)' }}>{d.short}</Typography> */}

                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{formatCurrency(d.price)}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Button size="small" variant="text" onClick={() => router.push(`/menu/${d.slug}`)}>Chi tiết</Button>
                    <Button size="small" variant="contained" sx={{ backgroundColor: 'var(--primary)' }} onClick={() => alert(`Thêm ${d.name} vào giỏ (demo)`)}>Thêm</Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
    </Box>
  );
}
