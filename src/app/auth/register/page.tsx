"use client";

import { Box, Typography, TextField, Button, Stack, Paper } from "@mui/material";
import Link from "next/link"; 

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

export default function RegisterPage() {
  return (
    // ⭐️ THAY ĐỔI 1: alignItems: 'flex-start' để căn trên cùng
    <Box 
        sx={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'flex-start', // ⭐️ ĐÃ THAY ĐỔI: Bắt đầu từ phía trên
            justifyContent: 'center' 
        }}
    >
        <Box 
            sx={{ 
                maxWidth: 420, 
                width: '100%',
                // ⭐️ THAY ĐỔI 2: Đặt paddingTop (pt) nhỏ và giữ padding bottom (pb) lớn
                pt: { xs: 4, md: 4 }, // Giảm padding top xuống mức tối thiểu (4)
                pb: { xs: 4, md: 6 }, // Giữ padding bottom để tạo khoảng trống dưới cùng
                px: { xs: 2, sm: 0}
            }}
        >
            <Paper elevation={8} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, background: '#fff' }}>
                <Typography variant="h4" fontWeight={800} mb={4} color={TEXT_COLOR} textAlign="center">
                    TẠO TÀI KHOẢN
                </Typography>

                <Stack spacing={2.5}> 
                    <TextField label="Họ và tên" fullWidth variant="outlined" sx={flatInputStyle} size="medium" />
                    <TextField label="Email" fullWidth variant="outlined" sx={flatInputStyle} size="medium" />
                    <TextField label="Mật khẩu" type="password" fullWidth variant="outlined" sx={flatInputStyle} size="medium" />
                    <TextField label="Nhập lại mật khẩu" type="password" fullWidth variant="outlined" sx={flatInputStyle} size="medium" />

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
                        ĐĂNG KÝ
                    </Button>
                </Stack>

                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee', textAlign: 'center' }}>
                    <Typography variant="body2" color="#777" mb={1}>
                        Bạn đã có tài khoản?
                    </Typography>
                    <Button
                        component={Link} 
                        href="/auth/login"
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
                    >
                        Đăng nhập ngay
                    </Button>
                </Box>
            </Paper>
        </Box>
    </Box>
  );
}