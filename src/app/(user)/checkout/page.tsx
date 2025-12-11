"use client";

import { Box, Typography, Divider, Button, Stack, Paper, IconButton } from "@mui/material";
import { useOrder } from "@/context/OrderContext";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

// Định nghĩa một chủ đề màu sắc nhẹ nhàng
const PRIMARY_COLOR = '#4CAF50'; // Xanh lá cây
const ACCENT_COLOR = '#FF9800'; // Cam/Caramel cho nút chính
const TEXT_COLOR = '#3E2723';   // Nâu đậm cho văn bản chính
const BORDER_COLOR = '#EDE7F6'; // Màu tím nhạt/kem

export default function CheckoutPage() {
  const { items, totalPrice, increaseQty, decreaseQty, removeItem, clearOrder } = useOrder();

  // Hàm định dạng tiền tệ
  const formatCurrency = (price: any) => price.toLocaleString("vi-VN") + '₫';

  return (
    <Box 
      sx={{ 
        maxWidth: 750, 
        mx: "auto", 
        py: { xs: 3, md: 6 }, 
        px: { xs: 2, md: 0 }, 
        color: TEXT_COLOR 
      }}
    >
      
      <Paper 
        elevation={6} 
        sx={{ 
          p: { xs: 2, md: 4 }, 
          borderRadius: 3, 
          bgcolor: 'white',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={3} color={TEXT_COLOR}>
          Chi tiết đơn hàng
        </Typography>

        {/* 📦 VÙNG CHỨA DANH SÁCH SẢN PHẨM CÓ THỂ CUỘN */}
        <Box 
          sx={{ 
            // Đặt chiều cao tối đa cho phép cuộn
            maxHeight: { xs: '35vh', sm: '45vh', md: '55vh' }, // Điều chỉnh tùy theo kích thước màn hình
            overflowY: 'auto', 
            pr: 1, // Padding bên phải để cuộn trông đẹp hơn
            // Thêm kiểu cuộn tùy chỉnh (chỉ hoạt động trên Webkit)
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: PRIMARY_COLOR,
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: BORDER_COLOR,
            },
          }}
        >
          {!items.length && (
            <Box sx={{ p: 3, textAlign: 'center', border: `1px dashed ${PRIMARY_COLOR}`, borderRadius: 2 }}>
              <Typography variant="subtitle1" color="gray">
                Giỏ hàng của bạn đang trống.
              </Typography>
            </Box>
          )}

          {items.map((item, index) => (
            <Box 
              key={item.id} 
              sx={{ 
                mb: 2, 
                py: 2, 
                borderBottom: index < items.length - 1 ? `1px solid ${BORDER_COLOR}` : 'none',
              }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                
                {/* Thông tin sản phẩm */}
                <Stack spacing={0.5} sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={600} color={TEXT_COLOR}>
                    {item.name}
                  </Typography>
                  <Typography color="text.secondary" variant="body2">
                    {formatCurrency(item.price)}
                  </Typography>
                </Stack>

                {/* Điều chỉnh số lượng */}
                <Stack 
                  direction="row" 
                  spacing={0} 
                  alignItems="center"
                  sx={{ 
                    border: `1px solid ${PRIMARY_COLOR}`, 
                    borderRadius: 2, 
                    mr: 2 
                  }}
                >
                  <IconButton size="small" onClick={() => decreaseQty(item.id)} color="primary">
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography variant="body1" sx={{ minWidth: 20, textAlign: 'center', fontWeight: 600 }}>
                    {item.quantity}
                  </Typography>
                  <IconButton size="small" onClick={() => increaseQty(item.id)} color="primary">
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Stack>
                
                {/* Nút Xóa */}
                <IconButton 
                  size="medium" 
                  color="error" 
                  onClick={() => removeItem(item.id)}
                  sx={{ 
                    ml: 1, 
                    '&:hover': { bgcolor: 'error.light', color: 'white' }
                  }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Box>
          ))}
        </Box>
        {/* 🛑 KẾT THÚC VÙNG CUỘN */}

        {/* 💰 Tổng cộng và Nút Thanh toán (Cố định ở dưới) */}
        <Divider sx={{ my: 3, borderColor: BORDER_COLOR }} />

        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight={700} color={TEXT_COLOR}>
            Tổng cộng
          </Typography>
          <Typography variant="h4" fontWeight={800} color={ACCENT_COLOR}>
            {formatCurrency(totalPrice)}
          </Typography>
        </Stack>

        <Button
          variant="contained"
          fullWidth
          size="large"
          disabled={!items.length}
          sx={{ 
            mt: 2, 
            py: 1.5, 
            bgcolor: ACCENT_COLOR, 
            color: 'white',
            fontWeight: 700,
            fontSize: '1.1rem',
            borderRadius: 2,
            boxShadow: `0 8px 15px ${ACCENT_COLOR}60`,
            '&:hover': {
              bgcolor: '#FF7043',
              boxShadow: `0 5px 10px ${ACCENT_COLOR}90`,
            }
          }}
          onClick={() => {
            if (items.length > 0) {
              alert(`Xác nhận thanh toán ${formatCurrency(totalPrice)} thành công!`);
              clearOrder();
            }
          }}
        >
          Xác nhận thanh toán
        </Button>
      </Paper>
    </Box>
  );
}