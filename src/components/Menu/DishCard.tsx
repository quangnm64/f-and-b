'use client';

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Stack, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { Dish } from '@/modules/menu/types';

export default function DishCard({ dish }: { dish: Dish }) {
  const router = useRouter();

  return (
    <Card
      className="dish-card-item"
      sx={{
        // ⭐️ 1. Đảm bảo chiếm 100% chiều cao của Box cha (Grid Item)
        height: '100%', 
        // ⭐️ 2. Loại bỏ các thuộc tính width cố định, để Grid/Flex cha quản lý
        width: '100%', 
        
        cursor: 'pointer',
        display: 'flex', // Để nội dung bên trong có thể co giãn
        flexDirection: 'column',
        borderRadius: 4, // Đặt độ bo góc 4 để khớp với Box bao ngoài
        overflow: 'hidden', // Quan trọng: Đảm bảo CardMedia bo góc đúng
      }}
    >
      <CardMedia
        component="img"
        image={dish.image}
        alt={dish.name}
        sx={{ 
          height: 180, 
          objectFit: 'cover', 
          // Loại bỏ border radius ở đây, để Card bao ngoài quản lý
          borderTopLeftRadius: 'inherit', 
          borderTopRightRadius: 'inherit',
        }}
        onClick={() => router.push(`/menu/${dish.slug}`)}
      />

      <CardContent 
        sx={{ 
          flexGrow: 1, // ⭐️ 3. Cho phép CardContent co giãn chiều cao còn lại
          pb: 2, 
          ':last-child': { paddingBottom: 2 } // Đảm bảo padding bottom nhất quán
        }}
      >
        <Typography variant="h4" sx={{ fontSize: '1rem', fontWeight: 700 }}>
          {dish.name}
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end" // ⭐️ Đảm bảo các button luôn nằm ở cuối Card
          sx={{ mt: 'auto', paddingTop: 2 }} // mt: 'auto' đẩy phần tử này xuống đáy CardContent
        >
          <Typography sx={{ fontWeight: 700, color: '#ff6600' }}>
            {dish.price.toLocaleString('vi-VN')}₫
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
              sx={{ backgroundColor: '#ff6600' }} // Dùng màu cam đã thống nhất
              onClick={() => alert(`Thêm ${dish.name} vào giỏ (demo)`)}
            >
              Thêm
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}