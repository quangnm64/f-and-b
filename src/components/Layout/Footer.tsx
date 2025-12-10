// src/components/Layout/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '@mui/icons-material/SmartDisplay';

const PRIMARY_DARK = '#212932';
const ACCENT_COLOR = '#4285F4';
const TEXT_LIGHT = '#e0e0e0';
const TEXT_MUTED_DARK = '#a0a0a0';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkStyle = {
    color: TEXT_LIGHT, // Đặt màu mặc định là màu sáng
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: ACCENT_COLOR,
      textDecoration: 'underline',
    },
  };

  const iconLinkStyle = {
    color: TEXT_MUTED_DARK,
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
      color: ACCENT_COLOR,
    },
  };

  return (
    <Box 
      component="footer" 
      sx={{ 
        mt: 6, 
        py: { xs: 5, md: 8 }, 
        background: PRIMARY_DARK, 
        color: TEXT_LIGHT, 
        boxShadow: '0 -5px 20px rgba(0,0,0,0.15)' 
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 5, md: 4 }} 
          justifyContent="space-between"
          alignItems="flex-start" 
        >
          {/* KHỐI LOGO & GIỚI THIỆU */}
          <Box sx={{ minWidth: 220 }}>
            <img 
              src="https://tse1.mm.bing.net/th/id/OIP.vTUWq6Bq0dRMAPp3_v54UQHaEK?pid=Api&P=0&h=220"
              alt="fandb" 
              style={{ height: 40, borderRadius: 6, filter: 'brightness(1.5)' }} 
            />
            <Typography variant="body2" sx={{ mt: 2, color: TEXT_MUTED_DARK, fontSize: '0.9rem' }}>
              fandb — Đặt bàn, xem menu, trải nghiệm ẩm thực tuyệt vời.
            </Typography>
          </Box>

          {/* KHỐI GIỜ MỞ CỬA */}
          <Box>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 700, 
                mb: 1.5, 
                color: TEXT_LIGHT, 
                borderBottom: `2px solid ${ACCENT_COLOR}`, 
                display: 'inline-block', 
                pb: 0.5 
              }}
            >
              Giờ mở cửa
            </Typography>
            <Typography variant="body2" sx={{ color: TEXT_MUTED_DARK, mb: 0.5 }}>
              T2 - T7: <Box component="span" sx={{ color: TEXT_LIGHT, fontWeight: 500 }}>07:00 - 22:00</Box>
            </Typography>
            <Typography variant="body2" sx={{ color: TEXT_MUTED_DARK }}>
              CN: <Box component="span" sx={{ color: TEXT_LIGHT, fontWeight: 500 }}>08:00 - 21:00</Box>
            </Typography>
          </Box>

          {/* KHỐI LIÊN HỆ */}
          <Box>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 700, 
                mb: 1.5, 
                color: TEXT_LIGHT, 
                borderBottom: `2px solid ${ACCENT_COLOR}`, 
                display: 'inline-block', 
                pb: 0.5 
              }}
            >
              Liên hệ
            </Typography>
            <Link href="tel:+84123456789" passHref legacyBehavior>
              <Typography variant="body2" sx={{ mb: 0.5, ...linkStyle }}>
                (+84) 123 456 789
              </Typography>
            </Link>
            <Link href="mailto:hello@fandb.example" passHref legacyBehavior>
              <Typography variant="body2" sx={{ ...linkStyle }}>
                hello@fandb.example
              </Typography>
            </Link>
          </Box>

          {/* KHỐI THEO DÕI */}
          <Box>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 700, 
                mb: 1.5, 
                color: TEXT_LIGHT, 
                borderBottom: `2px solid ${ACCENT_COLOR}`, 
                display: 'inline-block', 
                pb: 0.5 
              }}
            >
              Theo dõi
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <Link href="#" passHref legacyBehavior>
                <Box component="a" sx={iconLinkStyle}>
                  <FacebookIcon fontSize="medium" />
                </Box>
              </Link>
              <Link href="#" passHref legacyBehavior>
                <Box component="a" sx={iconLinkStyle}>
                  <InstagramIcon fontSize="medium" />
                </Box>
              </Link>
              <Link href="#" passHref legacyBehavior>
                <Box component="a" sx={iconLinkStyle}>
                  <TikTokIcon fontSize="medium" />
                </Box>
              </Link>
            </Stack>
          </Box>
        </Stack>

        {/* PHẦN COPYRIGHT */}
        <Box sx={{ textAlign: 'center', pt: 5, borderTop: `1px solid ${TEXT_MUTED_DARK}30`, mt: 5 }}>
          <Typography variant="caption" sx={{ color: TEXT_MUTED_DARK, fontSize: '0.8rem' }}>
            © {currentYear} fandb. All rights reserved. Vui lòng liên hệ hỗ trợ nếu cần.
          </Typography>
        </Box>
      </div>
    </Box>
  );
}