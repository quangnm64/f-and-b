'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
    AppBar,
    Toolbar,
    IconButton,
    Box,
    Stack,
    Avatar,
    useMediaQuery,
    Badge,
    Menu,        
    MenuItem,    
    Typography,
    Button, 
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { usePathname } from 'next/navigation';
import { useOrder } from '@/context/OrderContext';

// ⭐️ Định nghĩa màu sắc chủ đạo
const PRIMARY_COLOR = "#ff6600"; 
const TEXT_COLOR = "#3C4A60";    

// Giả định hook useAuth
const useAuth = () => {
    // ⭐️ Đặt giá trị này là false để kiểm tra trạng thái CHƯA ĐĂNG NHẬP
    const isAuthenticated = false; 
    const user = { 
        name: "User", 
        initial: "U", 
        email: "user@example.com" 
    };
    const logout = () => {
        alert("Đã đăng xuất!");
    };
    return { isAuthenticated, user, logout };
};

export default function Navbar() {
    const path = usePathname();
    const isMobile = useMediaQuery('(max-width:768px)');
    const { items } = useOrder();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const { isAuthenticated, user, logout } = useAuth(); 

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        logout();
        handleClose();
    };

    const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

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
                {/* LOGO (Giữ nguyên) */}
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

                {/* MENU (Giữ nguyên) */}
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
                    {/* Nút Giỏ hàng (Giữ nguyên) */}
                    <IconButton component={Link} href="/checkout">
                        <Badge badgeContent={cartItemCount} color="error" max={99}>
                            <ShoppingCartIcon sx={{ color: '#fff' }}/>
                        </Badge>
                    </IconButton>

                    {/* ⭐️ LOGIC: HIỂN THỊ AVATAR HOẶC NÚT ĐĂNG NHẬP */}
                    {isAuthenticated ? (
                        // ĐÃ ĐĂNG NHẬP: Hiển thị Avatar và Menu
                        <IconButton
                            onClick={handleMenu}
                            sx={{
                                ml: 1,
                                '&:hover .MuiAvatar-root': {
                                    transform: 'scale(1.15)',
                                    boxShadow: '0 0 20px rgba(255,255,255,0.9)',
                                },
                            }}
                        >
                            <Avatar
                                sx={{
                                    width: 38,
                                    height: 38,
                                    bgcolor: '#fff', 
                                    color: PRIMARY_COLOR, 
                                    fontWeight: 800,
                                    transition: '.3s',
                                }}
                            >
                                {user.initial} 
                            </Avatar>
                        </IconButton>
                    ) : (
                        // ⭐️ CHƯA ĐĂNG NHẬP: Hiển thị NÚT ĐĂNG NHẬP
                        <Button
                            component={Link}
                            href="/auth/login"
                            variant="contained"
                            sx={{
                                ml: 1,
                                bgcolor: '#fff',
                                color: PRIMARY_COLOR,
                                fontWeight: 700,
                                textTransform: 'none',
                                px: 2,
                                py: 0.8,
                                borderRadius: 1.5,
                                transition: '0.3s',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                                '&:hover': {
                                    bgcolor: '#eee',
                                    boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                                    transform: 'translateY(-1px)',
                                }
                            }}
                        >
                            Đăng nhập
                        </Button>
                    )}

                    {/* MENU DROP-DOWN (Chỉ mở khi isAuthenticated = true) */}
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': { 
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        {/* Nội dung Menu khi đã đăng nhập */}
                        <MenuItem>
                            <Avatar sx={{ bgcolor: PRIMARY_COLOR }}>{user.initial}</Avatar> 
                            <Stack>
                                <Typography fontWeight={600} color={TEXT_COLOR}>{user.name}</Typography>
                                <Typography variant="caption" color="text.secondary">{user.email}</Typography>
                            </Stack>
                        </MenuItem>
                        <MenuItem onClick={() => { handleClose(); /* Thêm hành động xem hồ sơ */ }}>
                            Hồ sơ cá nhân
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                            Đăng xuất
                        </MenuItem>
                    </Menu>

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