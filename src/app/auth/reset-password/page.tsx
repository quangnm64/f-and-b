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

export default function ResetPasswordPage({ params }: any) {
    // ⭐️ 1. QUẢN LÝ TRẠNG THÁI HIỂN THỊ MẬT KHẨU
    const [showOldPassword, setShowOldPassword] = useState(true);
    const [showNewPassword, setShowNewPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    const handleClickShowPassword = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
        setter((show) => !show);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // ⭐️ HÀM RENDER INPUT ADORNMENT CHUNG
    const renderPasswordAdornment = (showState: boolean, setter: React.Dispatch<React.SetStateAction<boolean>>) => (
        <InputAdornment position="end">
            <IconButton
                aria-label="toggle password visibility"
                onClick={() => handleClickShowPassword(setter)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
            >
                {showState ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </InputAdornment>
    );

    return (
        <Box 
            sx={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'flex-start',
                justifyContent: 'center' 
            }}
        >
            <Box 
                sx={{ 
                    maxWidth: 420, 
                    width: '100%',
                    pt: { xs: 4, md: 10 },
                    pb: { xs: 4, md: 6 },
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
                        {/* ⭐️ MẬT KHẨU CŨ */}
                        <TextField 
                            label="Mật khẩu cũ" 
                            type={showOldPassword ? "password":"text"} // ⭐️ Thay đổi type
                            fullWidth 
                            variant="outlined" 
                            sx={flatInputStyle} 
                            size="medium" 
                            InputProps={{ // ⭐️ Thêm InputProps
                                endAdornment: renderPasswordAdornment(showOldPassword, setShowOldPassword)
                            }}
                        />
                        {/* ⭐️ MẬT KHẨU MỚI */}
                        <TextField 
                            label="Mật khẩu mới" 
                            type={showNewPassword ? "password":"text"} // ⭐️ Thay đổi type
                            fullWidth 
                            variant="outlined" 
                            sx={flatInputStyle} 
                            size="medium"
                            InputProps={{ // ⭐️ Thêm InputProps
                                endAdornment: renderPasswordAdornment(showNewPassword, setShowNewPassword)
                            }}
                        />
                        {/* ⭐️ NHẬP LẠI MẬT KHẨU */}
                        <TextField 
                            label="Nhập lại mật khẩu" 
                            type={showConfirmPassword ? "password":"text"} // ⭐️ Thay đổi type
                            fullWidth 
                            variant="outlined"
                            sx={flatInputStyle} 
                            size="medium"
                            InputProps={{ // ⭐️ Thêm InputProps
                                endAdornment: renderPasswordAdornment(showConfirmPassword, setShowConfirmPassword)
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
                            XÁC NHẬN
                        </Button>
                    </Stack>
                </Paper>
            </Box>
        </Box>
    );
}