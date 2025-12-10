'use client';

import React from 'react';
import { Box, Button, Stack } from '@mui/material';

const categories = ['Tất cả', 'Coffee', 'Food', 'Dessert'];

export default function MenuFilter({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (cat: string) => void;
}) {
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap' }}>
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selected === cat ? 'contained' : 'outlined'}
          sx={{
            borderRadius: 20,
            borderColor: 'var(--primary)',
            color: selected === cat ? '#fff' : 'var(--primary)',
            background: selected === cat ? 'var(--primary)' : 'transparent',
          }}
          onClick={() => onChange(cat)}
        >
          {cat}
        </Button>
      ))}
    </Stack>
  );
}
