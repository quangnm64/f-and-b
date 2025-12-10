'use client';

import { Button, Stack } from '@mui/material';
import { timeSlots } from '@/data/timeSlots';

export default function TimeSlotPicker({ selected, onSelect }: any) {
  return (
    <Stack direction="row" flexWrap="wrap" gap={1}>
      {timeSlots.map((slot) => (
        <Button
          key={slot}
          variant={selected === slot ? 'contained' : 'outlined'}
          sx={{
            borderRadius: 20,
            borderColor: 'var(--primary)',
            color: selected === slot ? '#fff' : 'var(--primary)',
          }}
          onClick={() => onSelect(slot)}
        >
          {slot}
        </Button>
      ))}
    </Stack>
  );
}
