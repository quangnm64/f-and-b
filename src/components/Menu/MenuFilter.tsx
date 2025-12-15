// src/components/Menu/MenuFilter.tsx (Component mới)

import React from 'react';
import { Box, Button } from '@mui/material';
// ⭐️ Giả sử bạn có file categories.ts ở đúng đường dẫn
import categories from '@/data/categories'; 

// Thêm một category 'Tất cả' vào đầu danh sách
const allCategories = [
    { id: 'Tất cả', name: 'Tất cả', slug: 'all' },
    ...categories,
];

interface MenuFilterProps {
    currentCategory: string;
    onCategoryChange: (categoryId: string) => void;
}

export default function MenuFilter({ currentCategory, onCategoryChange }: MenuFilterProps) {
    return (
        <Box 
            sx={{ 
                mb: 4, 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: 2, // Khoảng cách giữa các nút
                justifyContent: 'center', // Canh giữa các nút
            }}
        >
            {allCategories.map((cat) => (
                <Button
                    key={cat.id}
                    onClick={() => onCategoryChange(cat.id)}
                    variant={currentCategory === cat.id ? 'contained' : 'outlined'}
                    size="large"
                    sx={{
                        borderRadius: 8, // Nút bo tròn
                        px: 3, // Padding ngang
                        py: 1, // Padding dọc
                        fontWeight: 600,
                        transition: 'all 0.3s ease-in-out',
                        
                        // Style cho nút được chọn (Contained)
                        ...(currentCategory === cat.id && {
                            backgroundColor: '#ff6b00', // Màu cam nổi bật
                            borderColor: '#ff6b00',
                            color: 'white',
                            boxShadow: '0 4px 12px rgba(255, 107, 0, 0.4)',
                            '&:hover': {
                                backgroundColor: '#ff4500', // Đậm hơn khi hover
                                boxShadow: '0 6px 16px rgba(255, 107, 0, 0.5)',
                            }
                        }),

                        // Style cho nút không được chọn (Outlined)
                        ...(!(currentCategory === cat.id) && {
                            color: '#ff6b00',
                            borderColor: '#ff6b00',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 107, 0, 0.05)',
                                borderColor: '#ff4500',
                            }
                        }),
                    }}
                >
                    {cat.name}
                </Button>
            ))}
        </Box>
    );
}