"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

import { useOrder } from "@/hooks/useOrder";
import { calculateTotal, buildOrderPayload } from "@/modules/order/service";
import { createOrderAction } from "@/modules/order/actions";

export default function CheckoutPage() {
  const { items, clearOrder } = useOrder();

  const [paymentMethod, setPaymentMethod] = useState<"cash" | "momo" | "vnpay">("cash");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const total = calculateTotal(items);

  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);

    const payload = buildOrderPayload(items, note, paymentMethod);

    const formData = new FormData();
    formData.append("payload", JSON.stringify(payload));

    const response = await createOrderAction(formData);

    if (response.success) {
      setResult("🎉 Đặt hàng thành công! Mã đơn: " + response.orderId);
      clearOrder();
    } else {
      setResult("❌ Lỗi: " + response.message);
    }

    setLoading(false);
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: "32px 16px" }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Thanh toán
      </Typography>

      {/* 🧾 Danh sách món */}
      <Card sx={{ mb: 3, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom fontWeight={600}>
            Giỏ hàng của bạn
          </Typography>
          <List>
            {items.map((item) => (
              <ListItem key={item.id}>
                <ListItemAvatar>
                  <Avatar variant="rounded" src={item.image} sx={{ width: 56, height: 56 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={`Số lượng: ${item.quantity} × ${item.price.toLocaleString()}đ`}
                />
                <Typography fontWeight={600}>
                  {(item.price * item.quantity).toLocaleString()}đ
                </Typography>
              </ListItem>
            ))}
          </List>

          {items.length === 0 && (
            <Typography color="text.secondary" fontStyle="italic">
              Giỏ hàng đang trống...
            </Typography>
          )}

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" textAlign="right">
            Tổng cộng:{" "}
            <span style={{ color: "#d32f2f", fontWeight: 700 }}>
              {total.toLocaleString()}đ
            </span>
          </Typography>
        </CardContent>
      </Card>

      {/* 💳 Phương thức thanh toán */}
      <Card sx={{ mb: 3, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Phương thức thanh toán
          </Typography>

          <RadioGroup
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value as any)}
          >
            <FormControlLabel value="cash" control={<Radio />} label="Tiền mặt khi nhận" />
            <FormControlLabel value="momo" control={<Radio />} label="Ví MoMo" />
            <FormControlLabel value="vnpay" control={<Radio />} label="VNPAY" />
          </RadioGroup>
        </CardContent>
      </Card>

      {/* 📝 Ghi chú */}
      <Card sx={{ mb: 3, boxShadow: 3, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Ghi chú cho đơn hàng
          </Typography>
          <TextField
            multiline
            fullWidth
            minRows={3}
            placeholder="Ghi chú thêm (tùy chọn)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Submit */}
      <Box textAlign="right">
        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={loading || items.length === 0}
          onClick={handleSubmit}
          sx={{
            paddingX: 4,
            paddingY: 1.5,
            fontSize: "1.1rem",
            fontWeight: 700,
            borderRadius: 2,
          }}
        >
          {loading ? "Đang xử lý..." : "Đặt hàng ngay"}
        </Button>
      </Box>

      {/* Kết quả */}
      {result && (
        <Card sx={{ mt: 3, borderLeft: "6px solid #1976d2", boxShadow: 2 }}>
          <CardContent>
            <Typography>{result}</Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
