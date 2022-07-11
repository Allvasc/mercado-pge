import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [mes, setMes] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setMes(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 350, maxWidth: 400, margin: "20px auto 20px auto", textAlign: "center" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mês</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mes}
          label="mes"
          onChange={handleChange}
        >
          <MenuItem value={1}>Janeiro</MenuItem>
          <MenuItem value={2}>Fevereiro</MenuItem>
          <MenuItem value={3}>Março</MenuItem>
          <MenuItem value={4}>Abril</MenuItem>
          <MenuItem value={5}>Maio</MenuItem>
          <MenuItem value={6}>Junho</MenuItem>
          <MenuItem value={7}>Julho</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}