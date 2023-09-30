import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useState} from 'react';

export default function BasicSelect(props) {
  const [type, setType] = useState(10);

  const handleChange = (event) => {
    setType(event.target.value);
};

useState(()=>{
    props.onSearchChange(type);

  },[type]);

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Browse by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={handleChange}
        >
          <MenuItem value={10}>Country</MenuItem>
          <MenuItem value={20}>Source</MenuItem>
          <MenuItem value={30}>Name</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}
