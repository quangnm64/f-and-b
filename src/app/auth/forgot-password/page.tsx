"use client";

import { Box, Typography, TextField, Button, Stack, Paper } from "@mui/material";
import Link from "next/link"; 

// ⭐️ Định nghĩa màu sắc chủ đạo
const PRIMARY_COLOR = "#ff6600"; // Cam đậm nổi bật
const TEXT_COLOR = "#3C4A60";    // Xanh Navy/Xám đậm

// Style chung cho Input Field
const flatInputStyle = {
    // Tinh chỉnh input khi hover/focus
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ddd', // Viền nhạt
        },
        '&:hover fieldset': {
            borderColor: PRIMARY_COLOR, // Viền cam khi hover
        },
        '&.Mui-focused fieldset': {
            borderColor: PRIMARY_COLOR, // Viền cam khi focus
            borderWidth: '1px', 
            boxShadow: `0 0 0 1.5px ${PRIMARY_COLOR}30`, // Shadow cam nhẹ
        },
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: PRIMARY_COLOR, // Label cam khi focus
    },
};

export default function ForgotPasswordPage() {
  return (
    // ⭐️ BACKGROUND VÀ CĂN CHỈNH: Đẩy nội dung lên sát mép trên
    <Box 
        sx={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'flex-start', // Căn trên cùng
            justifyContent: 'center' 
        }}
    >
        <Box 
            sx={{ 
                maxWidth: 420, 
                width: '100%',
                pt: { xs: 4, md: 10 }, // Giảm padding top
                pb: { xs: 4, md: 6 }, // Giữ padding bottom
                px: { xs: 2, sm: 0}
            }}
        >
            <Paper elevation={8} sx={{ p: { xs: 3, md: 3 }, borderRadius: 3, background: '#fff' }}>
                <Typography variant="h4" fontWeight={800} mb={3} color={TEXT_COLOR} textAlign="center">
                    QUÊN MẬT KHẨU
                </Typography>

                <Typography variant="body2" color="#666" mb={4} textAlign="center">
                    Vui lòng nhập email đã đăng ký. Chúng tôi sẽ gửi một liên kết để bạn đặt lại mật khẩu.
                </Typography>

                <Stack spacing={2.5} component="form"> 
                    <TextField 
                        label="Email" 
                        fullWidth 
                        variant="outlined" 
                        sx={flatInputStyle} 
                        size="medium" 
                        required
                    />

                    <Button 
                        type="submit"
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
                        GỬI YÊU CẦU
                    </Button>
                </Stack>
                
                {/* Nút quay lại trang đăng nhập */}
                <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid #eee', textAlign: 'center' }}>
                    <Button
                        component={Link} 
                        href="/auth/login"
                        variant="text"
                        sx={{
                            color: TEXT_COLOR,
                            textTransform: 'none',
                            fontWeight: 600,
                        }}
                    >
                        Quay lại Đăng nhập
                    </Button>
                </Box>
            </Paper>
        </Box>
    </Box>
  );
}