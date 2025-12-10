'use client';

import React from 'react';
import dishes from '@/data/dishes';
import DishDetailInfo from '@/components/Menu/DishDetailInfo';
import { Box, Container, Typography } from '@mui/material'; // Thêm Container và Typography
import { useParams } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default function DishDetailPage() {
  const params = useParams();
  // Đảm bảo params.slug là string trước khi tìm kiếm
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug; 
  const dish = dishes.find((d) => d.slug === slug);

  if (!dish) {
    return (
      <Container sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" color="text.secondary">
          Không tìm thấy món ăn 😔
        </Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{
        // 1. Nền tổng thể: Gradient trắng/kem nhẹ nhàng
        background: 'linear-gradient(135deg, #fefdfb 0%, #fff6f0 100%)',
        py: { xs: 4, md: 8 },
        minHeight: '100vh',
      }}
    >
      {/* Container: Căn giữa nội dung và giới hạn chiều rộng */}
      <Container maxWidth="lg">
        {/* 2. Bố cục chính: Box bao toàn bộ nội dung chi tiết */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 3, md: 6 },
            flexDirection: { xs: 'column', md: 'row' },
            p: { xs: 3, md: 5 }, // Padding bên trong Box
            borderRadius: 4,
            background: '#ffffff', // Nền trắng cho khối chi tiết
            // ⭐️ Hiệu ứng nổi bật: Shadow nhẹ nhàng và hiện đại
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)', 
          }}
        >
          {/* 3. Phần Hình ảnh (Left Side) */}
          <Box sx={{ 
              flex: 1, 
              // Thêm style cho Box chứa ảnh để tạo hiệu ứng
              borderRadius: 4, 
              overflow: 'hidden', 
              transition: 'transform 0.5s ease',
              // Shadow nổi bật hơn cho Box ảnh
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)', 
              '&:hover': {
                transform: 'scale(1.01)', // Phóng to nhẹ khi hover
              }
            }}>
            <img
              src={dish.image}
              alt={dish.name}
              style={{
                width: '100%',
                // Bo góc đã được đặt ở Box cha
                borderRadius: 16, 
                objectFit: 'cover',
                maxHeight: 500, // Tăng maxHeight cho ảnh
                display: 'block',
              }}
            />
          </Box>

          {/* 4. Phần Thông tin (Right Side) */}
          <Box sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'center', // Căn giữa nội dung theo chiều dọc
            }}>
            {/* Giả định DishDetailInfo chứa Typography và Button */}
            <DishDetailInfo dish={dish} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}