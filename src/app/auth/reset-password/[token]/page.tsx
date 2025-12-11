"use client";

import { Box, Typography, TextField, Button, Stack, Paper } from "@mui/material";

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

export default function ResetPasswordPage({ params }: any) {
  return (
    // ⭐️ THAY ĐỔI 1: alignItems: 'flex-start' để căn trên cùng
    <Box 
        sx={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'flex-start', // ⭐️ ĐÃ THAY ĐỔI: Đẩy nội dung lên sát mép trên
            justifyContent: 'center' 
        }}
    >
        <Box 
            sx={{ 
                maxWidth: 420, 
                width: '100%',
                // ⭐️ THAY ĐỔI 2: Đặt pt (padding top) nhỏ
                pt: { xs: 4, md: 10 }, // Giảm padding top
                pb: { xs: 4, md: 6 }, // Giữ padding bottom
                px: { xs: 2, sm: 0}
            }}
        >
            <Paper elevation={8} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, background: '#fff' }}>
                <Typography variant="h4" fontWeight={800} mb={3} color={TEXT_COLOR} textAlign="center">
                    ĐẶT LẠI MẬT KHẨU
                </Typography>

                <Typography variant="body2" color="#666" mb={4} textAlign="center">
                    Vui lòng nhập mật khẩu mới và xác nhận để hoàn tất quá trình.
                </Typography>

                <Stack spacing={2.5}> 
                    <TextField 
                        label="Mật khẩu mới" 
                        type="password" 
                        fullWidth 
                        variant="outlined" 
                        sx={flatInputStyle} 
                        size="medium" 
                    />
                    <TextField 
                        label="Nhập lại mật khẩu" 
                        type="password" 
                        fullWidth 
                        variant="outlined"
                        sx={flatInputStyle} 
                        size="medium"
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
                        XÁC NHẬN
                    </Button>
                </Stack>
            </Paper>
        </Box>
    </Box>
  );
}