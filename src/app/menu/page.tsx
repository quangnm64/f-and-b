  'use client';
  import React, { useMemo } from 'react';
  import dishes from '@/data/dishes';
  import { Box, Typography, Container } from '@mui/material'; // Thêm Container
  import DishCard from '@/components/Menu/DishCard';
  import { useState } from 'react';

  import SearchBar from '@/components/Form/SearchBar';

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
        <Container maxWidth="lg"> 
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
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (keyword: string) => {
      setSearchTerm(keyword.toLowerCase());
    };
    const filteredDishes = useMemo(() => {
      let list = dishes;

      // 1. Lọc theo Danh mục (Category Filter)
      if (cat !== 'Tất cả') {
          list = list.filter((d) => d.categoryId === cat);
      }

      // 2. Lọc theo Từ khóa (Search Filter)
      if (searchTerm.length > 0) {
          list = list.filter((d) => 
            // Giả sử món ăn có thuộc tính 'name' để tìm kiếm
            d.name.toLowerCase().includes(searchTerm) 
          );
      }

      return list;
     }, [cat, searchTerm]);
    return (
      <Box>
        {/* ⭐️ Sử dụng MenuFilter mới với style nút đẹp hơn */}
        <SearchBar onSearch={handleSearch} />
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
          {filteredDishes.map((dish) => (
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
        
        {filteredDishes.length === 0 && (
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