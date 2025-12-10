'use client';

import React, { useState } from 'react';
import { Box, TextField, Typography, Button } from '@mui/material';
// import { bookingAction } from '@/modules/booking/actions'; 

const PRIMARY_COLOR = '#3C4A60'; 
const PRIMARY_HOVER = '#2D394C';
const ACCENT_COLOR = '#4285F4';

// Giả định bookingAction
const bookingAction = async (formData: any) => {
    console.log("Submitting booking:", formData);
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (formData.date && formData.time && formData.guests > 0) {
        return { message: "Đặt bàn thành công! Chúng tôi đã gửi xác nhận qua điện thoại." };
    }
    return { message: "Lỗi: Không thể đặt bàn, vui lòng kiểm tra lại thông tin." };
};


export default function BookingForm() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    date: '',
    time: '',
    guests: 2, // Đã là kiểu số
    notes: '',
  });

  const [result, setResult] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.date || !form.time || form.guests < 1) {
      setResult("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }
    
    const res = await bookingAction(form); 
    setResult(res.message);
  }

  // Style chung cho Input Field (Flat Design & Minimal)
  const flatInputStyle = {
    '& .MuiOutlinedInput-root': {
      borderRadius: 1,
      backgroundColor: '#f8f8f8',
      '& fieldset': {
        borderColor: '#e8e8e8', 
        transition: 'border-color 0.3s, box-shadow 0.3s',
      },
      '&:hover fieldset': {
        borderColor: ACCENT_COLOR,
      },
      '&.Mui-focused fieldset': {
        borderColor: ACCENT_COLOR,
        borderWidth: '1px', 
        boxShadow: `0 0 0 1.5px rgba(66, 133, 244, 0.2)`, 
      },
    },
    '& .MuiInputLabel-root': {
      color: '#888',
      '&.Mui-focused': {
        color: PRIMARY_COLOR, 
      },
    },
    '& input[type="date"]::-webkit-calendar-picker-indicator, & input[type="time"]::-webkit-calendar-picker-indicator': {
        filter: `invert(20%) sepia(10%) saturate(1000%) hue-rotate(180deg) brightness(80%)`,
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: { xs: 2.5, md: 3 },
        background: '#ffffff',
        borderRadius: 2, 
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
        width: '100%', 
      }}
    >
      <Typography 
        variant="h5" 
        sx={{ 
          mb: 3, 
          fontWeight: 800,
          color: PRIMARY_COLOR,
          textAlign: 'center',
          borderBottom: `2px solid ${ACCENT_COLOR}20`,
          pb: 1,
        }}
      >
        ĐẶT BÀN ONLINE 🍷
      </Typography>

      {/* HÀNG 1: Họ tên & SĐT (2 CỘT) */}
      <Box
        sx={{
          display: 'flex',
          gap: 2, 
          flexDirection: { xs: 'column', sm: 'row' },
          mb: 2
        }}
      >
        <TextField
          label="Họ và tên"
          fullWidth
          required
          sx={{ flex: 1, ...flatInputStyle }}
          variant="outlined"
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          size="small"
        />
        <TextField
          label="Số điện thoại"
          fullWidth
          required
          sx={{ flex: 1, ...flatInputStyle }}
          variant="outlined"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          size="small"
          type="tel"
        />
      </Box>
      
      {/* HÀNG 2: Ngày & Giờ (2 CỘT) */}
      <Box
        sx={{
          display: 'flex',
          gap: 2, 
          flexDirection: { xs: 'column', sm: 'row' },
          mb: 2
        }}
      >
        <TextField
          label="Chọn Ngày"
          type="date"
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          variant="outlined"
          sx={{ flex: 1, ...flatInputStyle }}
          size="small"
        />
        <TextField
          label="Chọn Giờ"
          type="time"
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          variant="outlined"
          sx={{ flex: 1, ...flatInputStyle }}
          size="small"
        />
      </Box>

      {/* HÀNG 3: SỐ LƯỢNG KHÁCH (Dạng nhập số) */}
      <TextField
        label="Số lượng khách"
        fullWidth
        required
        // ⭐️ Đã thay đổi: type="number"
        type="number"
        // ⭐️ Đã thay đổi: min=1
        inputProps={{ min: 1 }} 
        value={form.guests}
        onChange={(e) => setForm({ ...form, guests: parseInt(e.target.value) })} // Chuyển sang số nguyên
        variant="outlined"
        size="small"
        sx={{ mb: 2, ...flatInputStyle }} 
      />

      {/* NOTES */}
      <TextField
        label="Ghi chú (Yêu cầu đặc biệt)"
        multiline
        rows={3} 
        fullWidth
        variant="outlined"
        value={form.notes}
        onChange={(e) => setForm({ ...form, notes: e.target.value })}
        size="small"
        sx={{ mb: 3, ...flatInputStyle }}
      />

      {/* Button Xác nhận Đặt bàn */}
      <Button
        type="submit"
        variant="contained"
        sx={{
          width: '100%',
          background: PRIMARY_COLOR,
          py: 1, 
          fontSize: '1rem', 
          fontWeight: 700,
          color: '#fff',
          borderRadius: 1, 
          boxShadow: `0 6px 15px ${PRIMARY_COLOR}40`, 
          transition: 'all 0.3s ease-in-out',
          '&:hover': { 
            background: PRIMARY_HOVER,
            transform: 'translateY(-2px)', 
            boxShadow: `0 10px 20px ${PRIMARY_COLOR}60`,
          },
        }}
      >
        XÁC NHẬN ĐẶT BÀN
      </Button>

      {result && (
        <Typography 
          sx={{ 
            mt: 2, 
            textAlign: 'center', 
            color: result.includes('thành công') ? 'green' : PRIMARY_COLOR, 
            fontWeight: 600, 
            fontSize: '0.9rem' 
          }}
        >
          {result}
        </Typography>
      )}
    </Box>
  );
}