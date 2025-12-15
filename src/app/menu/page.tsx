'use client';
import React, { useMemo } from 'react';
import dishes from '@/data/dishes';
import { Box, Typography, Container, Pagination } from '@mui/material';
import DishCard from '@/components/Menu/DishCard';
import { useState } from 'react';

import SearchBar from '@/components/Form/SearchBar';
import MenuFilter from '@/components/Menu/MenuFilter'; 

const DISHES_PER_PAGE = 4;
export default function MenuPage() {
  return (
    <Box
      sx={{
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
          {/* Thực Đơn Đặc Sắc Hôm Nay 🍕 */}
        </Typography>

        <ClientSection />
      </Container>
    </Box>
  );
}

function ClientSection() {
  const [cat, setCat] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearch = (keyword: string) => {
    setSearchTerm(keyword.toLowerCase());
    setCurrentPage(1)
  };
  
  const handleCategoryChange = (categoryId: string) => {
    setCat(categoryId);
    setCurrentPage(1);
  }

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  
  const filteredDishes = useMemo(() => {
    let list = dishes;

    if (cat !== 'Tất cả') {
        list = list.filter((d) => d.categoryId === cat); 
    }

    if (searchTerm.length > 0) {
        list = list.filter((d) => 
          d.name.toLowerCase().includes(searchTerm) 
        );
    }

    return list;
   }, [cat, searchTerm]); 
  
  const paginatedData = useMemo(() => {
      const pageCount = Math.ceil(filteredDishes.length / DISHES_PER_PAGE);

      const startIndex = (currentPage - 1) * DISHES_PER_PAGE;
      const endIndex = startIndex + DISHES_PER_PAGE;

      const paginatedDishes = filteredDishes.slice(startIndex, endIndex);

      return { paginatedDishes, pageCount };
      
  }, [filteredDishes, currentPage]); 
  const { paginatedDishes, pageCount } = paginatedData;
  return (
    <Box>
      <SearchBar onSearch={handleSearch} />
      
      <MenuFilter 
        currentCategory={cat} 
        onCategoryChange={handleCategoryChange} 
      />

      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)', 
          },
          gap: 4, 
          mb: 5,
        }}
      >
        {paginatedDishes.map((dish) => (
            <Box
                key={dish.id}
                sx={{
                    background: '#ffffff', 
                    borderRadius: 1, 
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
      {pageCount > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination 
              count={pageCount}  
              page={currentPage} 
              onChange={handlePageChange} 
              color="primary" 
              size="large" 
            />
          </Box>
        )}
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