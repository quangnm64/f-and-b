'use client';

import { Stack, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function PeopleSelector({ value, onChange }: any) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton onClick={() => onChange(Math.max(1, value - 1))}>
        <RemoveIcon />
      </IconButton>

      <Typography variant="h5" sx={{ width: 40, textAlign: 'center' }}>
        {value}
      </Typography>

      <IconButton onClick={() => onChange(value + 1)}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
}
