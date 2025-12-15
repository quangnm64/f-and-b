'use client';

import { 
    Box, 
    Typography, 
    TextField, 
    Button, 
    Stack, 
    Paper,
    IconButton, // ⭐️ Import mới
    InputAdornment // ⭐️ Import mới
} from "@mui/material";

// ⭐️ Import Icons
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import React, { useState } from 'react'; // ⭐️ Import useState

const PRIMARY_COLOR = "#ff6600"; 
const TEXT_COLOR = "#3C4A60";    

const flatInputStyle = {
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ddd', 
        },
        '&:hover fieldset': {
            borderColor: PRIMARY_COLOR, 
        },
        '&.Mui-focused fieldset': {
            borderColor: PRIMARY_COLOR, 
            borderWidth: '1px', 
            boxShadow: `0 0 0 1.5px ${PRIMARY_COLOR}30`, 
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: PRIMARY_COLOR, 
    },
};

export default function LoginPage() {
    // ⭐️ 1. QUẢN LÝ TRẠNG THÁI HIỂN THỊ MẬT KHẨU
    const [showPassword, setShowPassword] = useState(true);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box 
            sx={{ 
                maxWidth: 420, 
                mx: "auto", 
                py: { xs: 4, md: 8 } 
            }}
        >
            <Paper elevation={8} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, background: '#fff' }}>
                <Typography variant="h4" fontWeight={800} mb={4} color={TEXT_COLOR} textAlign="center">
                    ĐĂNG NHẬP
                </Typography>

                <Stack spacing={2.5}> 
                    <TextField 
                        label="Email" 
                        fullWidth 
                        variant="outlined" 
                        sx={flatInputStyle} // Áp dụng style
                    />
                    
                    {/* ⭐️ TRƯỜNG MẬT KHẨU ĐÃ CHỈNH SỬA */}
                    <TextField 
                        label="Mật khẩu" 
                        type={showPassword ? 'password' : 'text'} // ⭐️ Thay đổi type dựa trên state
                        fullWidth 
                        variant="outlined"
                        sx={flatInputStyle} 
                        InputProps={{ // ⭐️ Thêm InputProps để chứa icon
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />

                    <Button
                        variant="contained" 
                        fullWidth 
                        sx={{ 
                            background: PRIMARY_COLOR,
                            mt: 1, 
                            py: 1.5, 
                            fontSize: '1rem', 
                            fontWeight: 700,
                            borderRadius: 1,
                            boxShadow: `0 6px 15px ${PRIMARY_COLOR}40`,
                            transition: 'all 0.3s',
                            '&:hover': {
                                background: '#e65c00', 
                                boxShadow: `0 8px 20px ${PRIMARY_COLOR}60`,
                                transform: 'translateY(-1px)',
                            }
                        }}
                    >
                        ĐĂNG NHẬP
                    </Button>
                </Stack>

                <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Button
                        variant="text"
                        sx={{ color: TEXT_COLOR, textTransform: 'none', mb: 0.5 }}
                        onClick={() => (window.location.href = "/auth/forgot-password")}
                    >
                        Quên mật khẩu?
                    </Button>
                </Box>
                
                <Box sx={{ mt: 1, pt: 2, borderTop: '1px solid #eee', textAlign: 'center' }}>
                    <Typography variant="body2" color="#777" mb={1}>
                        Bạn chưa có tài khoản?
                    </Typography>
                    <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                            borderColor: PRIMARY_COLOR,
                            color: PRIMARY_COLOR,
                            py: 1,
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            borderRadius: 1,
                            textTransform: 'none',
                            '&:hover': {
                                background: `${PRIMARY_COLOR}10`,
                                borderColor: PRIMARY_COLOR,
                            }
                        }}
                        onClick={() => (window.location.href = "/auth/register")}
                    >
                        Đăng ký ngay
                    </Button>
                </Box>

            </Paper>
        </Box>
    );
}