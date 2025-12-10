// src/app/dat-ban/page.tsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import BookingForm from '@/components/Booking/BookingForm';

const BACKGROUND_IMAGE_URL = 'https://picsum.photos/seed/restaurant-booking/1920/1080';

export default function BookingPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 2, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            gap: 5,
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'flex-start',
          }}
        >
          <Box
            sx={{
              flex: 1,
              p: { xs: 3, md: 5 },
              minHeight: { md: 500 }, 
              color: '#ffffff', 
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '4rem' },
                fontWeight: 900,
                mb: 3,
                color: '#ffffff',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', 
              }}
            >
              ĐẶT BÀN <br />
              NGAY
            </Typography>
            <Typography 
              variant="body1" 
              sx={{
                color: '#f0f0f0',
                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.9)', 
                maxWidth: 400,
              }}
            >
              Chào mừng bạn đến nhà hàng của chúng tôi! Hãy đặt ngay để sắp xếp thời gian phục vụ hoàn hảo nhất.
            </Typography>
          </Box>

          <Box sx={{ flex: 1.2, width: { xs: '100%', md: 'auto' } }}>
            <BookingForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}