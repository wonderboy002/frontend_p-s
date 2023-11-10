import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import './index.css'

const MyDrawer = () => {
  const [open, setOpen] = useState(false);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button onClick={handleToggleDrawer}>Open Drawer</Button>
      <Drawer anchor="right" open={open} onClose={handleToggleDrawer}>
        {/* Content of the drawer goes here */}
        <div>
            <li><a href="https://google.com"></a></li>
            <li><a href="https://google.com"></a></li>
            <li><a href="https://google.com">hello</a></li>
            <li><a href="https://google.com">hello</a></li>
            <li><a href="https://google.com">hello</a></li>
            <li><a href="https://google.com">hello</a></li>
        </div>hello
      </Drawer>
    </div>
  );
};

export default MyDrawer;
