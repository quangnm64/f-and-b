"use client";

import {
  Box,
  TextField,
  Button,
  MenuItem,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { bookTable } from "@/modules/booking/actions";
import { timeSlots } from "@/data/timeSlots";

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    fullName: "",
    phone: "",
    guests: 2,
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await bookTable(values);
    setLoading(false);

    alert(res.message);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Họ và tên"
        required
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Số điện thoại"
        required
        name="phone"
        value={values.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        select
        label="Số khách"
        name="guests"
        value={values.guests}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 10].map((g) => (
          <MenuItem key={g} value={g}>
            {g} khách
          </MenuItem>
        ))}
      </TextField>

      <TextField
        type="date"
        label="Ngày"
        name="date"
        value={values.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        select
        label="Khung giờ"
        name="time"
        value={values.time}
        onChange={handleChange}
        fullWidth
        margin="normal"
      >
        {timeSlots.map((slot) => (
          <MenuItem key={slot} value={slot}>
            {slot}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Ghi chú"
        name="notes"
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
        sx={{ mt: 2, py: 1.5, fontSize: 16, borderRadius: 2 }}
      >
        {loading ? <CircularProgress size={26} /> : "Đặt bàn ngay"}
      </Button>

      <Typography textAlign="center" mt={2} color="gray">
        Xác nhận sẽ được gửi qua SMS hoặc Zalo
      </Typography>
    </Box>
  );
}
