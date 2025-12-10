"use client";

import { Box, Typography, Divider, Paper } from "@mui/material";
import { useOrder } from "@/hooks/useOrder";
import { formatCurrency } from "@/lib/formatter";

export default function OrderSummary() {
  const { items, total } = useOrder();

  return (
    <Paper elevation={3} sx={{ padding: 3, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight={600}>
        Đơn hàng của bạn
      </Typography>

      <Divider sx={{ my: 2 }} />

      {items.length === 0 ? (
        <Typography>Giỏ hàng trống.</Typography>
      ) : (
        <Box>
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 1.5,
              }}
            >
              <Typography>{item.name} x {item.quantity}</Typography>
              <Typography>{formatCurrency(item.price * item.quantity)}</Typography>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography fontWeight={700}>Tổng:</Typography>
            <Typography fontWeight={700} color="primary">
              {formatCurrency(total)}
            </Typography>
          </Box>
        </Box>
      )}
    </Paper>
  );
}
