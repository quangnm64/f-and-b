"use client";

import { Box, Typography, Divider, Button, Stack } from "@mui/material";
import { useOrder } from "@/context/OrderContext";

export default function CheckoutPage() {
  const { items, totalPrice, increaseQty, decreaseQty, removeItem, clearOrder } = useOrder();

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", py: 4 }}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Thanh toán
      </Typography>

      {!items.length && (
        <Typography>Giỏ hàng trống.</Typography>
      )}

      {items.map((item) => (
        <Box key={item.id} sx={{ mb: 3, p: 2, borderRadius: 2, border: "1px solid #ddd" }}>
          <Stack direction="row" justifyContent="space-between">
            <Stack spacing={0.5}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography color="gray">{item.price.toLocaleString("vi-VN")}₫</Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center">
              <Button size="small" onClick={() => decreaseQty(item.id)}>-</Button>
              <Typography>{item.quantity}</Typography>
              <Button size="small" onClick={() => increaseQty(item.id)}>+</Button>
              <Button size="small" color="error" onClick={() => removeItem(item.id)}>Xóa</Button>
            </Stack>
          </Stack>
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" fontWeight={700}>
        Tổng cộng: {totalPrice.toLocaleString("vi-VN")}₫
      </Typography>

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 3, py: 1.5, backgroundColor: "#ff6600" }}
        onClick={() => {
          alert("Thanh toán thành công! (demo)");
          clearOrder();
        }}
      >
        Xác nhận thanh toán
      </Button>
    </Box>
  );
}
