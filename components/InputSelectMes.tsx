import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext, useState } from 'react';
import { ComprasContext } from '../context/getCompras';

export default function BasicSelect() {
  const [mes, setMes] = useState('');
  const context = useContext(ComprasContext)

  const handleChange = (event: SelectChangeEvent) => {
    console.log('inputSelect', event.target.value as string)
    setMes(event.target.value as string);
    context.fecthData(event.target.value as string)
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
          <MenuItem value={"Janeiro"}>Janeiro</MenuItem>
          <MenuItem value={"Fevereiro"}>Fevereiro</MenuItem>
          <MenuItem value={"Março"}>Março</MenuItem>
          <MenuItem value={"Abril"}>Abril</MenuItem>
          <MenuItem value={"Maio"}>Maio</MenuItem>
          <MenuItem value={"Junho"}>Junho</MenuItem>
          <MenuItem value={"Julho"}>Julho</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}