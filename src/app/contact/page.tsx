"use client";

import { Box, Typography, TextField, Button, Paper, Stack } from "@mui/material";
import { useState } from "react";
// Import icons để làm phần thông tin liên hệ sinh động
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

// ⭐️ Định nghĩa màu sắc (Đồng bộ với BookingForm/AboutPage)
const PRIMARY_COLOR = '#3C4A60'; // Xanh Navy
const ACCENT_COLOR = '#ff8c00'; // Màu Cam (Điểm nhấn)
const BORDER_GRAY = '#e8e8e8';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendForm = (e: React.FormEvent) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form nếu cần
    // Logic gửi form (API call) sẽ được đặt ở đây
    setSent(true);
    // Reset form sau khi gửi
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  // ⭐️ Style chung cho Input Field (Flat Design)
  const flatInputStyle = {
    mb: 2,
    '& .MuiOutlinedInput-root': {
      borderRadius: 1,
      backgroundColor: '#f8f8f8', 
      '& fieldset': {
        borderColor: BORDER_GRAY, 
        transition: 'border-color 0.3s, box-shadow 0.3s',
      },
      '&:hover fieldset': {
        borderColor: ACCENT_COLOR,
      },
      '&.Mui-focused fieldset': {
        borderColor: ACCENT_COLOR,
        borderWidth: '1px', 
        boxShadow: `0 0 0 1.5px rgba(255, 140, 0, 0.2)`, // Shadow màu cam nhạt
      },
    },
    '& .MuiInputLabel-root': {
      color: '#888',
      '&.Mui-focused': {
        color: PRIMARY_COLOR,
      },
    },
  };
  
  // ⭐️ Component Info Line
  const InfoLine = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
    <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 1.5 }}>
      <Box sx={{ color: ACCENT_COLOR, pt: 0.5 }}>{icon}</Box>
      <Box>
        <Typography variant="body2" sx={{ fontWeight: 600, color: PRIMARY_COLOR }}>{label}</Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>{value}</Typography>
      </Box>
    </Stack>
  );


  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: 1200, margin: '0 auto' }}>

      {/* Layout 2 cột bằng Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        {/* 1. FORM */}
        <Paper 
          component="form"
          onSubmit={sendForm}
          sx={{ 
            p: { xs: 3, md: 4 }, 
            borderRadius: 3, 
            flex: "1 1 380px", 
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)' 
          }}
        >
          <Typography variant="h5" mb={3} fontWeight={700} color={PRIMARY_COLOR}>
            Gửi Yêu Cầu Hỗ Trợ
          </Typography>

          <TextField
            name="name"
            label="Họ và tên"
            fullWidth
            required
            sx={flatInputStyle}
            value={form.name}
            onChange={handleChange}
            size="small"
          />

          <TextField
            name="phone"
            label="Số điện thoại"
            fullWidth
            required
            sx={flatInputStyle}
            value={form.phone}
            onChange={handleChange}
            size="small"
          />

          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            required
            sx={flatInputStyle}
            value={form.email}
            onChange={handleChange}
            size="small"
          />

          <TextField
            name="message"
            label="Nội dung/Yêu cầu"
            multiline
            rows={5}
            fullWidth
            required
            sx={flatInputStyle}
            value={form.message}
            onChange={handleChange}
            size="small"
          />

          <Button 
            type="submit"
            variant="contained" 
            fullWidth 
            sx={{
                background: ACCENT_COLOR,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 700,
                boxShadow: `0 4px 10px ${ACCENT_COLOR}60`,
                transition: 'all 0.3s',
                '&:hover': {
                    background: PRIMARY_COLOR,
                    boxShadow: `0 6px 15px ${PRIMARY_COLOR}60`,
                    transform: 'translateY(-1px)',
                }
            }}
          >
            GỬI THÔNG TIN
          </Button>

          {sent && (
            <Typography color="green" mt={2} textAlign="center" fontWeight={600}>
              ✅ Gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.
            </Typography>
          )}
        </Paper>

        {/* 2. MAP + INFO */}
        <Paper 
          sx={{ 
            p: { xs: 3, md: 4 }, 
            borderRadius: 3, 
            flex: "1 1 380px", 
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)' 
          }}
        >
          <Typography variant="h5" mb={3} fontWeight={700} color={PRIMARY_COLOR}>
            Thông Tin Liên Hệ
          </Typography>

          {/* ⭐️ Sử dụng InfoLine component với Icons */}
          <InfoLine icon={<LocationOnIcon />} label="Địa chỉ" value="123 Nguyễn Trãi, Phường 11, Quận 5, TP.HCM" />
          <InfoLine icon={<PhoneIcon />} label="Hotline" value="0909 999 888" />
          <InfoLine icon={<EmailIcon />} label="Email" value="support@fandb.com" />
          <InfoLine icon={<AccessTimeIcon />} label="Giờ mở cửa" value="Thứ 2 - Chủ Nhật: 07:00 – 23:00" />
          
          <Box
            sx={{
              mt: 4,
              height: 280,
              borderRadius: 2,
              overflow: "hidden",
              width: "100%",
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* ⭐️ Thêm title và kiểm tra lại src iframe. Google Maps URL mẫu thường bắt đầu bằng https://www.google.com/maps/embed/v1/place... */}
            <iframe
              title="Vị trí nhà hàng F&B"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              // Thay thế src bằng URL Google Maps Embed thực tế
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.645700772718!2d106.6789505!3d10.7617066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f207d50d6f3%3A0x651664e7c7a521e0!2zMTIzIE5ndXnhu4VuIFRyw6NpLCBQaMaw4buduZyAxMSwgUXXhuq1uIDUsIFRow6BuaCBwaOG7kSBI4buTIEPDrSBNaW5o!5e0!3m2!1svi!2s!4v1677894567890!5m2!1svi!2s"
            ></iframe>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}