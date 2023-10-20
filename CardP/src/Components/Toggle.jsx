import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import useTheme from '../Context/Theme';

export default function ControlledSwitches() {
  const [checked, setChecked] = useState(false);
  const {mode,darkTheme,lightTheme}=useTheme();

  const handleChange = (event) => {
    setChecked(event.target.checked); 
    if (!checked){
        darkTheme()
    }
    else{
        lightTheme()
    }
    console.log(checked);
  };

  

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}