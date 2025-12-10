"use client";

import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useOrder } from "@/context/OrderContext";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, increaseQty, decreaseQty, removeItem, totalPrice } = useOrder();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 380, p: 3 }}>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" fontWeight={700}>
            Giỏ hàng
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* List Items */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {items.length === 0 && (
            <Typography color="gray">Giỏ hàng trống.</Typography>
          )}

          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                gap: 2,
                p: 1,
                borderRadius: 2,
                bgcolor: "#f7f7f7",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 6,
                  objectFit: "cover",
                }}
              />

              <Box flex={1}>
                <Typography fontWeight={600}>{item.name}</Typography>
                <Typography>{item.price.toLocaleString()}đ</Typography>

                {/* Quantity */}
                <Box display="flex" alignItems="center" gap={1} mt={1}>
                  <IconButton size="small" onClick={() => decreaseQty(item.id)}>
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton size="small" onClick={() => increaseQty(item.id)}>
                    <AddIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Box>

              {/* Remove */}
              <IconButton onClick={() => removeItem(item.id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Total */}
        <Typography fontWeight={700} fontSize={20}>
          Tổng: {totalPrice.toLocaleString()}đ
        </Typography>

        <Button
          sx={{ mt: 2, py: 1.5, borderRadius: 2 }}
          variant="contained"
          fullWidth
        >
          Thanh toán
        </Button>
      </Box>
    </Drawer>
  );
}
