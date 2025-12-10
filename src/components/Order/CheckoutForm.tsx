"use client";

import { Box, TextField, Button, CircularProgress, Typography, Paper } from "@mui/material";
import { useState } from "react";
import { useOrder } from "@/hooks/useOrder";
import { createOrderAction } from "@/modules/order/actions";

export default function CheckoutForm() {
  const { items, total, clearOrder } = useOrder();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    
    const formData = new FormData();
    
    // 2. Thêm dữ liệu phức tạp (customer, items) dưới dạng JSON string
    formData.append('customer', JSON.stringify(values));
    formData.append('items', JSON.stringify(items));

    // 3. Thêm dữ liệu đơn giản (total)
    // Cần đảm bảo total là chuỗi
    formData.append('total', total.toString());
    const res = await createOrderAction(formData);

    setLoading(false);
    alert(res.message);
    clearOrder();
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Thông tin người nhận
      </Typography>

      <Box component="form" onSubmit={submit}>
        <TextField
          name="fullName"
          label="Họ và tên"
          value={values.fullName}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />

        <TextField
          name="phone"
          label="Số điện thoại"
          value={values.phone}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />

        <TextField
          name="address"
          label="Địa chỉ giao"
          value={values.address}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />

        <TextField
          name="notes"
          label="Ghi chú"
          value={values.notes}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
          rows={3}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          sx={{ mt: 2, py: 1.4, fontSize: 16, borderRadius: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : "Xác nhận đặt hàng"}
        </Button>
      </Box>
    </Paper>
  );
}
