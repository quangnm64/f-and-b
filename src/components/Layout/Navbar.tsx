'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Stack,
  Button,
  Avatar,
  useMediaQuery,
  Badge,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { usePathname } from 'next/navigation';
import { useOrder } from '@/context/OrderContext';

export default function Navbar() {
  const path = usePathname();
  const isMobile = useMediaQuery('(max-width:768px)');
  const { items } = useOrder();
  const [openCart, setOpenCart] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background:
          'linear-gradient(135deg, rgba(255,140,0,0.75), rgba(255,215,0,0.75))',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 15px 50px rgba(255,140,0,0.35)',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          py: 1.2,
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            textDecoration: 'none',
          }}
        >
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.vTUWq6Bq0dRMAPp3_v54UQHaEK?pid=Api&P=0&h=220"
            alt="fandb"
            style={{
              height: 48,
              borderRadius: 14,
              background: '#fff',
              padding: 4,
              boxShadow:
                '0 0 0 rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.6)',
              animation: 'logoPulse 3s infinite ease-in-out',
            }}
          />
          <strong
            style={{
              fontSize: 22,
              color: '#fff',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}
          >
            fandb
          </strong>
        </Link>

        {/* MENU */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Stack direction="row" spacing={4}>
            {[
              { label: 'Trang chủ', href: '/' },
              { label: 'Menu', href: '/menu' },
              { label: 'Đặt bàn', href: '/booking' },
              { label: 'Giới thiệu', href: '/about' },
              { label: 'Liên hệ', href: '/contact' },
            ].map((item) => {
              const active = path === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontWeight: 700,
                    position: 'relative',
                    color: '#fff',
                    textDecoration: 'none',
                    textShadow: active
                      ? '0 0 15px rgba(255,255,255,0.8)'
                      : 'none',
                    transition: '.3s',
                  }}
                >
                  {item.label}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      height: 3,
                      width: active ? '100%' : '0%',
                      background:
                        'linear-gradient(90deg, #fff, #ffe29f)',
                      borderRadius: 10,
                      boxShadow: '0 0 15px #fff',
                      transition: '0.3s',
                    }}
                  />
                </Link>
              );
            })}
          </Stack>
        </Box>

        {/* ACTIONS */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={() => setOpenCart(true)}>
            <Badge badgeContent={items.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <IconButton
            sx={{
              ml: 1,
              '&:hover .MuiAvatar-root': {
                transform: 'scale(1.15)',
                boxShadow:
                  '0 0 20px rgba(255,255,255,0.9)',
              },
            }}
          >
            <Avatar
              sx={{
                width: 38,
                height: 38,
                bgcolor: '#fff',
                color: '#ff9800',
                fontWeight: 800,
                transition: '.3s',
              }}
            >
              U
            </Avatar>
          </IconButton>

          {isMobile && (
            <IconButton
              sx={{
                ml: 1,
                color: '#fff',
                background: 'rgba(255,255,255,0.15)',
                '&:hover': {
                  background: 'rgba(255,255,255,0.3)',
                  transform: 'scale(1.15) rotate(90deg)',
                },
                transition: '.3s',
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* CSS keyframes */}
      <style jsx global>{`
        @keyframes logoPulse {
          0% {
            box-shadow: 0 0 0 rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.8);
          }
          100% {
            box-shadow: 0 0 0 rgba(255, 255, 255, 0.4);
          }
        }
      `}</style>
    </AppBar>
  );
}
