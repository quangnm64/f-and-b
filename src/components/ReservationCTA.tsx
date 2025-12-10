"use client";
import { Box, Button, Typography } from "@mui/material";

export default function ReservationCTA() {
  return (
    <Box
      className="section"
      textAlign="center"
      mb={6}
      mt={4}
      sx={{
        background: "white",
        p: 6,
        borderRadius: 4,
        boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Typography variant="h4" fontWeight={700}>
        Đặt bàn ngay hôm nay
      </Typography>

      <Typography mt={1} color="text.secondary">
        Hãy chọn thời gian phù hợp và tận hưởng trải nghiệm ẩm thực tuyệt vời.
      </Typography>

      <Button
        href="/booking"
        variant="contained"
        sx={{ mt: 3, bgcolor: "#C62828", px: 5, py: 1.5 }}
      >
        Đặt Bàn
      </Button>
    </Box>
  );
}
