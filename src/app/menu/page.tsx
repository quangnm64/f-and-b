  'use client';
  import React from 'react';
  import dishes from '@/data/dishes';
  import { Box, Typography, Container } from '@mui/material'; // Thêm Container
  import DishCard from '@/components/Menu/DishCard';
  import { useState } from 'react';

  // Giả định categories có sẵn để filter và render nút
  // (Trong thực tế, bạn nên lấy danh sách này từ dishes hoặc API)
  const categories = [
    { id: 'Tất cả', name: 'Tất cả' },
    { id: '1', name: 'Món Chính' },
    { id: '2', name: 'Món Khai Vị' },
    { id: '3', name: 'Đồ Uống' },
    { id: '4', name: 'Tráng Miệng' },
  ];

  // --- Component MenuFilter MỚI (để style nút) ---
  // Thay thế component MenuFilter cũ của bạn
  function MenuFilter({ selected, onChange }:any) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center', // Căn giữa các nút lọc
          flexWrap: 'wrap',
          gap: { xs: 1, md: 2 }, // Khoảng cách giữa các nút
          mb: 6, // Khoảng cách bên dưới thanh filter
        }}
      >
        {categories.map((cat) => (
          <CategoryButton
            key={cat.id}
            categoryId={cat.id}
            categoryName={cat.name}
            selected={selected === cat.id}
            onClick={() => onChange(cat.id)}
          />
        ))}
      </Box>
    );
  }

  // --- Component Nút Category Riêng Biệt (Dùng để thay đổi background) ---
  import { Button } from '@mui/material';

  function CategoryButton({ categoryId, categoryName, selected, onClick }:any) {
    return (
      <Button
        variant="contained"
        onClick={onClick}
        sx={{
          minWidth: 100,
          py: { xs: 1, md: 1.5 },
          px: { xs: 2, md: 3 },
          borderRadius: 8, // Bo tròn nút
          fontWeight: 600,
          textTransform: 'none',
          transition: 'all 0.3s cubic-bezier(.4, 0, .2, 1)',
          
          // Style Mặc định (Chưa được chọn)
          backgroundColor: '#ffffff', // Nền trắng
          color: '#555555', // Chữ xám đậm
          border: '1px solid #e0e0e0', // Border nhẹ
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
          
          '&:hover': {
            backgroundColor: '#ffdbcc', // Màu hồng đào nhạt khi hover
            color: '#e65c00', // Màu chữ cam khi hover
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          },

          // ⭐️ Style Khi Được Chọn (SELECTED) - Thay đổi background và color
          ...(selected && {
            backgroundColor: '#ff6600', // Màu cam rực rỡ khi được chọn
            color: '#ffffff', // Chữ trắng
            border: '1px solid #ff6600',
            boxShadow: '0 5px 15px rgba(255, 102, 0, 0.35)', // Shadow nổi bật
            transform: 'translateY(-2px)', // Nhấn nút nổi lên nhẹ

            '&:hover': {
              backgroundColor: '#e65c00', // Màu cam đậm hơn khi hover
              boxShadow: '0 5px 15px rgba(255, 102, 0, 0.5)',
            },
          }),
        }}
      >
        {categoryName}
      </Button>
    );
  }
  // -----------------------------------------------------------------

  export default function MenuPage() {
    return (
      <Box
        sx={{
          // Nền tổng thể: Gradient ấm áp, dịu mắt
          minHeight: '100vh',
          background: 'linear-gradient(145deg, #fefdfb 0%, #fff6f0 100%)',
          pt: 4, 
          pb: 8,
        }}
      >
        <Container maxWidth="lg"> {/* Dùng Container để căn giữa và giới hạn chiều rộng */}
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 5, 
              textAlign: 'center',
              fontWeight: 900,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(90deg, #ff8c00, #ff4500)', 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            Thực Đơn Đặc Sắc Hôm Nay 🍕
          </Typography>

          <ClientSection />
        </Container>
      </Box>
    );
  }

  // Tách phần logic filter sang client
  function ClientSection() {
    const [cat, setCat] = useState('Tất cả');

    const filtered =
      cat === 'Tất cả' ? dishes : dishes.filter((d) => d.categoryId === cat);

    return (
      <Box>
        {/* ⭐️ Sử dụng MenuFilter mới với style nút đẹp hơn */}
        <MenuFilter selected={cat} onChange={setCat} />

        {/* Grid món ăn (đã tối ưu lại bố cục) */}
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)', // Thêm 4 cột cho màn hình lớn
            },
            gap: 4, 
          }}
        >
          {filtered.map((dish) => (
              // Bọc DishCard trong Box để thêm hiệu ứng Hover đẹp mắt
              <Box
                  key={dish.id}
                  sx={{
                      background: '#ffffff', 
                      borderRadius: 4, 
                      overflow: 'hidden', 
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)', 
                      transition: 'all .4s cubic-bezier(.25,.8,.25,1)', 
                      
                      '&:hover': {
                          transform: 'translateY(-8px) scale(1.02)', 
                          boxShadow: '0 10px 30px rgba(255, 107, 0, 0.3)', // Shadow cam nổi bật
                      },
                  }}
              >
                  <DishCard dish={dish} />
              </Box>
          ))}
        </Box>
        
        {filtered.length === 0 && (
            <Typography 
              variant="h6" 
              sx={{ textAlign: 'center', mt: 6, color: '#999' }}
            >
              🍽️ Xin lỗi, hiện tại không có món ăn nào trong danh mục này.
            </Typography>
        )}
      </Box>
    );
  }